import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Bubble,
  GiftedChat,
  IMessage,
  Send,
  SendProps,
} from "react-native-gifted-chat";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./Styles";
import Color from "../../../common/Color";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Chat = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState([]);

  const chatbotSteps = [
    "Hi, do you want to talk?",
    "Why are you feeling down?",
    "Relax, it happens to everyone.",
    "Do not think too much. Okay, let me distract you from this. Did you eat three meals today?",
    "Did you start eating too much junk food?",
    "Do you want talk me from start?",
  ];

  useEffect(() => {
    // Load stored messages from AsyncStorage
    retrieveMessages();
  }, []);

  useEffect(() => {
    // Save messages to AsyncStorage whenever it changes
    storeMessages();
  }, [messages]);

  const storeMessages = async () => {
    try {
      await AsyncStorage.setItem("chatMessages", JSON.stringify(messages));
    } catch (error) {
      console.log("Error storing chat messages:", error);
    }
  };

  const retrieveMessages = async () => {
    try {
      const storedMessages = await AsyncStorage.getItem("chatMessages");
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      } else {
        // If no stored messages, show initial message after a delay
        setTimeout(() => {
          setMessages([
            {
              _id: 1,
              text: chatbotSteps[currentStep],
              createdAt: new Date(),
              user: {
                _id: 2,
                name: "Chatbot",
              },
            },
          ]);
        }, 1000);
      }
    } catch (error) {
      console.log("Error retrieving chat messages:", error);
    }
  };

  const onSend = useCallback(
    (userMessages = []) => {
      const newMessages = userMessages.map((message) => ({
        ...message,
        user: {
          _id: 1,
          name: "User",
        },
      }));

      setMessages((previousMessages) => [...previousMessages, ...newMessages]);

      const lastUserMessage = userMessages[userMessages.length - 1];
      const userResponse = lastUserMessage.text.toLowerCase();

      if (
        currentStep === chatbotSteps.length - 1 &&
        !userResponse.includes("yes")
      ) {
        // User does not want to start from the beginning
        // Display thank you message and end the conversation
        setMessages((previousMessages) => [
          ...previousMessages,
          {
            _id: previousMessages?.length + 1,
            text: "Thank you for chatting!",
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "Chatbot",
            },
          },
        ]);
      } else if (
        userResponse.includes("hi") ||
        userResponse.includes("hello")
      ) {
        // User greets the chatbot, start the conversation from the beginning
        setCurrentStep(0);
        setMessages([
          {
            _id: previousMessages?.length + 1,
            text: chatbotSteps[0],
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "Chatbot",
            },
          },
        ]);
      } else {
        // User wants to continue the conversation
        setCurrentStep((prevStep) => (prevStep + 1) % chatbotSteps.length);
        setMessages((previousMessages) => [
          ...previousMessages,
          {
            _id: previousMessages?.length + 1,
            text: chatbotSteps[(currentStep + 1) % chatbotSteps.length],
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "Chatbot",
            },
          },
        ]);
      }
    },
    [currentStep]
  );

  const handleClearChat = () => {
    // Clear messages and reset currentStep to 0
    setMessages([]);
    setCurrentStep(0);
    AsyncStorage.removeItem("chatMessages");

    // Show initial message after a delay
    setTimeout(() => {
      setMessages([
        {
          _id: 1,
          text: chatbotSteps[currentStep],
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Chatbot",
          },
        },
      ]);
    }, 1000);
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: Color.green,
          },
        }}
      />
    );
  };

  const renderSend = (props) => (
    <Send {...props}>
      <TouchableOpacity
        style={Styles.sendButton}
        onPress={() => props.onSend({ text: props.text.trim() }, true)}
      >
        <Text style={Styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </Send>
  );

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.Header}>
        <Text style={Styles.text}>Chatbot</Text>
        <TouchableOpacity onPress={handleClearChat} style={Styles.clearBtn}>
          <Text style={Styles.BtnTxt}>Delete Chat</Text>
        </TouchableOpacity>
      </View>
      <GiftedChat
        messages={messages.reverse()}
        onSend={onSend}
        user={{
          _id: 1,
          name: "User",
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        messagesContainerStyle={{
          backgroundColor: Color.white,
        }}
      />
    </SafeAreaView>
  );
};

export default Chat;
