import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TimeTableScreen = () => {
  const [selectedDate, setSelectedDate] = useState("1");

  const days = [
    { day: "MON", date: "1" },
    { day: "MON", date: "2" },
    { day: "MON", date: "3" }
  ];

  const classes = [
    { date: "1", subject: "SPM", time: "7-9:30", location: "LC" },
    { date: "1", subject: "Enterprise Java", time: "10-11", location: "504" },
    { date: "1", subject: "Advance web programming", time: "11-1", location: "Lab" },
    { date: "2", subject: "Database Systems", time: "8-10", location: "203" },
  ];

  const handleDatePress = (date) => {
    setSelectedDate(date);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Timetable</Text>
      <View style={styles.backgroundColor}>
      <Text style={styles.subHeader}>Month</Text>
      <View style={styles.dayContainer}>
        {days.map((item, index) => (
          <TouchableOpacity key={index} style={[styles.dayBox, selectedDate === item.date ? styles.activeDay : styles.inactiveDay]} 
            onPress={() => handleDatePress(item.date)}>
            <Text style={styles.dayText}>{item.date}</Text>
            <Text style={styles.dayLabel}>{item.day}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>
      {classes.filter(cls => cls.date === selectedDate).map((cls, index) => (
        <View key={index} style={styles.classContainer}>
          <Text style={styles.classText}>Subject - <Text style={styles.classSubject}>{cls.subject}</Text></Text>
          <Text style={styles.classText}>Time - <Text style={styles.classTime}>{cls.time}</Text></Text>
          <Text style={styles.classText}>Location - <Text style={styles.classLocation}>{cls.location}</Text></Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',

    marginBottom: 10,
  },
  backgroundColor:{
    backgroundColor: '#FFA500',
    marginBottom: 10,
    width:'auto',
  },
  subHeader: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    marginBottom: 10,
    paddingLeft: 10,
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dayBox: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
  },
  activeDay: {
    backgroundColor: '#00FF00', // Lime green for active date
    borderColor: 'white', // White border for active date
  },
  inactiveDay: {
    backgroundColor: '#00BFFF', // Light blue for inactive dates
    borderColor: 'black',
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  dayLabel: {
    fontSize: 14,
    textAlign: 'center',
  },
  classContainer: {
    backgroundColor: '#FFA500', // Orange background for class details
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
   
  },
  classText: {
    fontSize: 18,
    color: 'black',
  },
  classSubject: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  classTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  classLocation: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
});

export default TimeTableScreen;
