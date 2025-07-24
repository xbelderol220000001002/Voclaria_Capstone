import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image, // <-- add Image import
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const roles = ['STUDENT', 'TEACHER'];

export default function CreateAccount() {
  const [role, setRole] = useState('STUDENT');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-transparent"
    >
      {/* Gradient Background */}
      <LinearGradient
        colors={['#0A0A0F', '#1A1A2E', '#16213E']}
        locations={[0, 0.5, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
      >
        <View className="absolute -top-16 -left-12 w-40 h-40 rounded-full bg-violet-600 opacity-10" />
        <View className="absolute top-24 -right-10 w-24 h-24 rounded-full bg-blue-600 opacity-10" />
        <View className="absolute bottom-24 left-12 w-9 h-9 rounded-full bg-cyan-300 opacity-10" />
        <View className="absolute bottom-5 right-10 w-15 h-15 rounded-full bg-purple-500 opacity-10" />
        <View className="absolute top-52 left-24 w-6 h-6 rounded-full bg-cyan-300 opacity-10" />
      </LinearGradient>

      {/* Main Content */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        className="z-10 px-4 py-8"
      >
        <View className="w-full max-w-xl mx-auto">
          {/* Header */}
          <View className="flex-row items-center mb-4">
            <View className="w-10 h-10 rounded-2xl items-center justify-center mr-2 overflow-hidden">
              <Image source={require('../assets/Speaksy.png')} style={{ width: 52, height: 95, resizeMode: 'contain' }} />
            </View>
            <Text className="text-white text-2xl font-bold">Speaksy</Text>
          </View>
          <Text className="text-white text-2xl font-bold mb-6">Create Account</Text>

          <View className="bg-white/10 rounded-2xl p-5">
            {/* Role Dropdown */}
            <View className="mb-4 relative">
              <Pressable
                onPress={() => setDropdownVisible((v) => !v)}
                className="flex-row items-center px-4 py-2 bg-white/10 rounded-lg"
              >
                <Text className="text-white flex-1">{role}</Text>
                <Ionicons name={dropdownVisible ? 'chevron-up' : 'chevron-down'} size={20} color="#fff" />
              </Pressable>
              {dropdownVisible && (
                <View className="absolute top-12 left-0 right-0 z-20 bg-[#1e1e3e]/95 rounded-lg shadow-md">
                  {roles.map((item) => (
                    <Pressable
                      key={item}
                      onPress={() => {
                        setRole(item);
                        setDropdownVisible(false);
                      }}
                      className={`px-4 py-2 ${role === item ? 'bg-violet-600/20' : ''}`}
                    >
                      <Text className="text-white text-base">{item}</Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>

            {/* First and Last Name */}
            <View className="flex-row gap-2 mb-3">
              {[{ label: 'First Name', val: firstName, set: setFirstName },
                { label: 'Last Name', val: lastName, set: setLastName }].map((f, i) => (
                <View className="flex-1" key={i}>
                  <Text className="text-gray-300 text-xs mb-1">{f.label}</Text>
                  <TextInput
                    placeholder={`Enter ${f.label.toLowerCase()}`}
                    placeholderTextColor="#bbb"
                    className="bg-white/10 text-white px-3 py-2 rounded-lg text-sm"
                    value={f.val}
                    onChangeText={f.set}
                  />
                </View>
              ))}
            </View>

            {/* Email */}
            <Text className="text-gray-300 text-xs mb-1">School Email</Text>
            <View className="flex-row items-center bg-white/10 rounded-lg mb-3">
              <TextInput
                placeholder="Enter your school email"
                placeholderTextColor="#bbb"
                className="flex-1 text-white px-3 py-2 text-sm"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Ionicons name="mail-outline" size={18} color="#bbb" className="mr-2.5" />
            </View>

            {/* ID */}
            <Text className="text-gray-300 text-xs mb-1">ID Number</Text>
            <TextInput
              placeholder="Enter your ID number"
              placeholderTextColor="#bbb"
              className="bg-white/10 text-white px-3 py-2 rounded-lg text-sm mb-3"
              value={idNumber}
              onChangeText={setIdNumber}
            />

            {/* Passwords */}
            {[{
              label: 'Password',
              value: password,
              setter: setPassword,
              show: showPassword,
              toggle: () => setShowPassword(!showPassword)
            }, {
              label: 'Confirm Password',
              value: confirmPassword,
              setter: setConfirmPassword,
              show: showConfirmPassword,
              toggle: () => setShowConfirmPassword(!showConfirmPassword)
            }].map((f, i) => (
              <View key={i}>
                <Text className="text-gray-300 text-xs mb-1">{f.label}</Text>
                <View className="flex-row items-center bg-white/10 rounded-lg mb-3">
                  <TextInput
                    placeholder={f.label === 'Password' ? 'Create a strong password' : 'Confirm your password'}
                    placeholderTextColor="#bbb"
                    className="flex-1 text-white px-3 py-2 text-sm"
                    value={f.value}
                    onChangeText={f.setter}
                    secureTextEntry={!f.show}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity onPress={f.toggle} className="pr-3">
                    <Ionicons name={f.show ? 'eye-off' : 'eye'} size={18} color="#bbb" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            {/* Agreement */}
            <View className="flex-row items-center mb-3">
              <Pressable onPress={() => setAgreed(!agreed)} className="mr-2">
                <View className={`w-5 h-5 rounded border ${agreed ? 'border-violet-600 bg-violet-600' : 'border-gray-400'} items-center justify-center`}>
                  {agreed && <Ionicons name="checkmark" size={13} color="#fff" />}
                </View>
              </Pressable>
              <Text className="text-white text-xs">
                I agree to the <Text className="text-violet-500 underline">Terms</Text> & <Text className="text-violet-500 underline">Privacy</Text>
              </Text>
            </View>

            {/* Submit */}
            <TouchableOpacity
              disabled={!agreed}
              className={`bg-violet-600 rounded-lg py-3 flex-row justify-center items-center ${!agreed ? 'opacity-60' : ''}`}
            >
              <Text className="text-white font-bold text-base mr-2">Create Account</Text>
              <Ionicons name="arrow-forward" size={18} color="#fff" />
            </TouchableOpacity>

            {/* Alt Login */}
            <Text className="text-gray-400 text-center my-4 text-sm">or continue with</Text>
            <TouchableOpacity className="flex-row items-center justify-center bg-white/10 rounded-lg py-2 mb-3">
              <Image source={require('../assets/Google.png')} style={{ width: 18, height: 18, resizeMode: 'contain', marginRight: 8 }} />
              <Text className="text-white text-base">Google</Text>
            </TouchableOpacity>

            {/* Footer */}
            <Text className="text-gray-400 text-center text-sm">
              Already have an account? <Text className="text-violet-500 underline">Sign in</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
