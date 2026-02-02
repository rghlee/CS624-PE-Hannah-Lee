import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CY 500 - Cybersecurity Overview',
    'CY 505 - Systems Security',
    'CY 510 - Human and Organization Security',
    'CY 520 - Ethical, Legal, and Societal Security',
    'CY 525 - Network and Wireless Security',
    'CY 545 - Data Privacy and Security',
    'CY 609 - Software Security',
    'CY 628 - Components Integration Security',
  ];

  const depthCourses = [
    'CS 624 - Full-Stack Development - Mobile App',
    'CY 605 - Cybersecurity Auditing',
  ];

  const capstoneCourse = ['CY 665 - Cybersecurity Capstone'];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./assets/images/icon.png')} style={styles.icon} />
        <Text style={styles.title}>MSCS Courses</Text>
      </View>

      {/* Favorite Course Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your favorite course:</Text>
        <TextInput
          style={styles.input}
          placeholder="ex. CS 624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />
        {favoriteCourse ? (
          <Text style={styles.favorite}>Your favorite course: {favoriteCourse}</Text>
        ) : null}
      </View>

      {/* Core Courses */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Core Courses</Text>
        {coreCourses.map((course, index) => (
          <Text key={index} style={styles.courseItem}>{course}</Text>
        ))}
      </View>

      {/* Depth of Study Courses */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Depth of Study Courses</Text>
        {depthCourses.map((course, index) => (
          <Text key={index} style={styles.courseItem}>{course}</Text>
        ))}
      </View>

      {/* Capstone Course */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Capstone Course</Text>
        {capstoneCourse.map((course, index) => (
          <Text key={index} style={styles.courseItem}>{course}</Text>
        ))}
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  icon: { width: 150, height: 150, marginRight: 20 },
  title: { fontSize: 80, fontWeight: 'bold' },
  inputContainer: { marginBottom: 40, backgroundColor: 'olive', padding: 10 },
  label: { marginBottom: 8, fontSize: 16 },
  input: { borderWidth: 2, borderColor: 'white', padding: 8, fontSize: 16 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 30, fontWeight: '500', marginBottom: 2 },
  courseItem: { fontSize: 16, paddingVertical: 1 },
    
});

export default CoreComponents;
