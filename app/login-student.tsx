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
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    borderRadius: 9999,
  },
  circle1: {
    top: -64,
    left: -48,
    width: 160,
    height: 160,
    backgroundColor: 'rgba(124, 58, 237, 0.3)', // violet-600
  },
  circle2: {
    top: 96,
    right: -40,
    width: 96,
    height: 96,
    backgroundColor: 'rgba(37, 99, 235, 0.3)', // blue-600
  },
  circle3: {
    bottom: 40,
    left: 48,
    width: 36,
    height: 36,
    backgroundColor: 'rgba(103, 232, 249, 0.3)', // cyan-300
  },
  circle4: {
    bottom: 20,
    right: 40,
    width: 60,
    height: 60,
    backgroundColor: 'rgba(168, 85, 247, 0.3)', // purple-500
  },
  circle5: {
    top: 110,
    left: 250,
    width: 24,
    height: 24,
    backgroundColor: 'rgba(103, 232, 249, 0.3)', // cyan-300
  },
});

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log('Login with:', { email, password, rememberMe });
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to home/dashboard after successful login
      // router.replace('/(tabs)');
    }, 1500);
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsGoogleLoading(true);
      console.log('Initiating Google Sign In...');
      // TODO: Implement actual Google Sign In logic here
      // This is a placeholder for future implementation
      // Example implementation might look like:
      // const result = await GoogleSignin.signIn();
      // const userInfo = await GoogleSignin.getCurrentUser();
      // console.log('Google User Info:', userInfo);
      // router.replace('/(tabs)'); // Navigate after successful sign in
      
      // For now, just simulate a successful sign in after a delay
      setTimeout(() => {
        console.log('Google Sign In successful');
        setIsGoogleLoading(false);
        // Uncomment and implement navigation when ready
        // router.replace('/(tabs)');
      }, 1500);
    } catch (error) {
      console.error('Google Sign In Error:', error);
      setIsGoogleLoading(false);
      // Handle error (show error message to user)
    }
  };

  const handleForgotPassword = () => {
    // TODO: Navigate to forgot password screen
    console.log('Forgot password');
    // router.push('/forgot-password');
  };

  const handleSignUp = () => {
    // Navigate to sign up screen
    router.push('/create-account');
  };

  const isFormValid = email.trim() && password.length >= 6;

  return (
    <View style={{ flex: 1, backgroundColor: '#0A0A0F' }}>
      {/* Background Gradient Layer */}
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <LinearGradient
          colors={['#0A0A0F', '#1A1A2E', '#16213E']}
          locations={[0, 0.5, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        
        {/* Decorative Circles */}
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
        <View style={[styles.circle, styles.circle4]} />
        <View style={[styles.circle, styles.circle5]} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, zIndex: 1 }}
          className="px-4 py-8"
        >
          <View className="w-full max-w-md mx-auto mt-4 pl-4 pr-4">
            {/* Header with Logo and App Name */}
            <View className="flex-row items-center mb-6">
              <View className="w-16 h-16 rounded-2xl items-center justify-center overflow-hidden -ml-4">
                <Image 
                  source={require('../assets/Speaksy.png')} 
                  style={{ width: 60, height: 110, resizeMode: 'contain' }} 
                />
              </View>
              <Text className="text-white text-2xl font-bold -ml-2">Voclaria</Text>
            </View>
            
            {/* Welcome Back Message */}
            <View className="mb-6">
              <Text className="text-white text-2xl font-bold">Welcome Back!</Text>
              <Text className="text-white text-sm mt-1">Time to sharpen your skills, let's get started</Text>
            </View>
            
            {/* Login Form Container */}
            <View className="bg-white/20 rounded-2xl p-6">
              {/* Student Login Indicator */}
              <View className="bg-white/50 rounded px-4 py-1.5 self-start mb-6">
                <Text className="text-white/100 text-xs font-medium">STUDENT</Text>
              </View>
              {/* Email Input */}
              <Text className="text-gray-300 text-sm mb-1">School Email</Text>
              <View className="flex-row items-center bg-white/30 rounded-lg mb-4 pr-3">
                <TextInput
                  placeholder="Enter your school email"
                  placeholderTextColor="#bbb"
                  className="flex-1 text-white px-3 py-3 text-base"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <Ionicons name="mail-outline" size={20} color="#bbb" />
              </View>

              {/* Password Input */}
              <Text className="text-gray-300 text-sm mb-1">Password</Text>
              <View className="flex-row items-center bg-white/30 rounded-lg mb-1 pr-3">
                <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor="#bbb"
                  className="flex-1 text-white px-3 py-3 text-base"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={20} 
                    color="#bbb" 
                  />
                </TouchableOpacity>
              </View>

              {/* Remember Me & Forgot Password */}
              <View className="flex-row justify-between items-center mb-6 mt-2">
                <Pressable 
                  onPress={() => setRememberMe(!rememberMe)}
                  className="flex-row items-center"
                >
                  <View className={`w-5 h-5 rounded border mr-2 ${rememberMe ? 'bg-violet-600 border-violet-600' : 'border-gray-400'}`}>
                    {rememberMe && <Ionicons name="checkmark" size={16} color="white" />}
                  </View>
                  <Text className="text-white/80 text-sm">Remember me</Text>
                </Pressable>
                
                <TouchableOpacity onPress={handleForgotPassword}>
                  <Text className="text-violet-400 text-sm">Forgot Password?</Text>
                </TouchableOpacity>
              </View>

              {/* Sign In Button */}
              <TouchableOpacity
                onPress={handleLogin}
                disabled={!isFormValid || isLoading}
                className={`py-3 rounded-lg flex-row justify-center items-center mb-4 ${
                  isFormValid ? 'bg-violet-600' : 'bg-violet-600/50'
                }`}
              >
                <Text className="text-white font-bold text-lg">
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Text>
                {!isLoading && <Ionicons name="arrow-forward" size={20} color="white" className="ml-2" />}
              </TouchableOpacity>

              {/* Divider */}
              <View className="flex-row items-center my-4">
                <View className="flex-1 h-px bg-white/20" />
                <Text className="mx-3 text-white/50 text-sm">or continue with</Text>
                <View className="flex-1 h-px bg-white/20" />
              </View>

              {/* Google Sign In */}
              <TouchableOpacity
                onPress={handleGoogleSignIn}
                disabled={isGoogleLoading}
                className={`flex-row items-center justify-center bg-white/10 border border-white/20 rounded-lg py-3 mb-6 ${
                  isGoogleLoading ? 'opacity-70' : ''
                }`}
              >
                {isGoogleLoading ? (
                  <ActivityIndicator color="#fff" size="small" className="mr-2" />
                ) : (
                  <Image 
                    source={require('../assets/Google.png')} 
                    style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 12 }} 
                  />
                )}
                <Text className="text-white text-base font-medium">
                  {isGoogleLoading ? 'Signing in...' : 'Continue with Google'}
                </Text>
              </TouchableOpacity>

              {/* Sign Up Link */}
              <View className="flex-row justify-center">
                <Text className="text-white/80 text-sm">
                  Don't have an account?{' '}
                  <Text 
                    className="text-violet-400 font-semibold"
                    onPress={handleSignUp}
                  >
                    Sign up now
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}