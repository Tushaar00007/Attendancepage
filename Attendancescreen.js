import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const AttendanceScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const students = [
    { id: 1, rollNo: '1' },
    { id: 2, rollNo: '2' },
    { id: 3, rollNo: '3' },
    { id: 4, rollNo: '4' },
    { id: 5, rollNo: '5' },
  ];

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const formattedDate = date.toLocaleDateString();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>LOGO</Text>
        <Text style={styles.titleText}>ATTENDANCE</Text>
      </View>
      <View style={styles.classInfo}>
        <Text style={styles.classText}>
          Class <Text style={styles.classHighlight}>TYBSCIT</Text>
          {' '}{formattedDate}
        </Text>
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <FontAwesome name="calendar" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {students.map((student) => (
        <View key={student.id} style={styles.studentRow}>
          <Text style={styles.rollNoText}>ROLL NO</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.buttonPresent}
              onPress={() => console.log(`Marked Present for roll number ${student.rollNo}`)}
            >
              <Text style={styles.buttonText}>P</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAbsent}
              onPress={() => console.log(`Marked Absent for roll number ${student.rollNo}`)}
            >
              <Text style={styles.buttonText}>A</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3f51b5',
    padding: 10,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    marginTop: 5,
  },
  classInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
  },
  classText: {
    fontSize: 18,
    marginRight: 5, // Adjusts spacing between the text and the icon
  },
  classHighlight: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 0, // Ensures the icon is close to the text
  },
  studentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#3f51b5',
    marginVertical: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  rollNoText: {
    color: 'white',
    fontSize: 16,
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  buttonPresent: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonAbsent: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AttendanceScreen;
