// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// const RezervasyonPage = () => {
//   const [userName, setUserName] = useState('');
//   const [ustName, setUstName] = useState('');
//   const [address, setAddress] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [appointments, setAppointments] = useState<any[]>([]);

//   const handleOrder = () => {
//     if (userName && ustName && address && selectedDate) {
//       const newAppointment = { userName, ustName, address, selectedDate };
//       setAppointments([...appointments, newAppointment]);
//       setModalVisible(true);
//       setUserName('');
//       setUstName('');
//       setAddress('');
//       setSelectedDate('');
//     } else {
//       alert('Lütfen tüm bilgileri doldurun.');
//     }
//   };

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date: Date) => {
//     const formattedDate = date.toLocaleString();
//     setSelectedDate(formattedDate);
//     hideDatePicker();
//   };

//   const handleDelete = (index: number) => {
//     const updatedAppointments = appointments.filter((_, i) => i !== index);
//     setAppointments(updatedAppointments);
//   };

//   const renderAppointment = ({ item, index }: { item: any, index: number }) => (
//     <View style={styles.appointmentContainer}>
//       <Text style={styles.appointmentText}>Ad Soyad: {item.userName}</Text>
//       <Text style={styles.appointmentText}>Usta Ad Soyad: {item.ustName}</Text>
//       <Text style={styles.appointmentText}>Adres: {item.address}</Text>
//       <Text style={styles.appointmentText}>Tarih: {item.selectedDate}</Text>
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => handleDelete(index)}
//       >
//         <Text style={styles.deleteButtonText}>Sil</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Adınız Soyadınız:</Text>
//       <TextInput
//         style={styles.input}
//         value={userName}
//         onChangeText={setUserName}
//         placeholder="Adınız ve Soyadınız"
//       />
      
//       <Text style={styles.label}>Usta Adı Soyadı:</Text>
//       <TextInput
//         style={styles.input}
//         value={ustName}
//         onChangeText={setUstName}
//         placeholder="Usta Adı ve Soyadı"
//       />

//       <Text style={styles.label}>Adresiniz:</Text>
//       <TextInput
//         style={styles.input}
//         value={address}
//         onChangeText={setAddress}
//         placeholder="Adresiniz"
//         multiline
//       />

//       <Text style={styles.label}>Randevu Tarihi ve Saati:</Text>
//       <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
//         <Text style={styles.dateButtonText}>
//           {selectedDate ? selectedDate : 'Tarih ve saat seçin'}
//         </Text>
//       </TouchableOpacity>

//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="datetime"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleOrder}>
//         <Text style={styles.buttonText}>Randevu Oluştur</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={appointments}
//         renderItem={renderAppointment}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.appointmentList}
//       />

//       <Modal
//         transparent={true}
//         animationType="fade"
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalText}>
//               Randevunuz başarıyla oluşturuldu!
//             </Text>
//             <TouchableOpacity
//               style={styles.modalButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.modalButtonText}>Tamam</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   label: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 5,
//     marginTop:10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   dateButton: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//     backgroundColor: '#e8e8e8',
//   },
//   dateButtonText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   button: {
//     backgroundColor: 'orange',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   appointmentList: {
//     marginTop: 30,
//     marginBottom: 20,
//   },
//   appointmentContainer: {
//     padding: 15,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     borderWidth: 0.7,
//     borderColor: '#ccc',
//   },
//   appointmentText: {
//     fontSize: 15,
//     color: 'black',
//     marginBottom: 5,
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   deleteButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalBackground: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//     width: '80%',
//   },
//   modalText: {
//     fontSize: 18,
//     color: '#333',
//     marginBottom: 20,
//   },
//   modalButton: {
//     backgroundColor: 'orange',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   modalButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default RezervasyonPage;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const RezervasyonPage = () => {
  const [userName, setUserName] = useState('');
  const [ustName, setUstName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [appointments, setAppointments] = useState<any[]>([]);

  const handleOrder = () => {
    if (userName && ustName && address && selectedDate) {
      const newAppointment = { userName, ustName, address, selectedDate };
      setAppointments([...appointments, newAppointment]);
      setModalVisible(true);
      setUserName('');
      setUstName('');
      setAddress('');
      setSelectedDate('');
    } else {
      alert('Lütfen tüm bilgileri doldurun.');
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = date.toLocaleString();
    setSelectedDate(formattedDate);
    hideDatePicker();
  };

  const handleDelete = (index: number) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  const renderAppointment = ({ item, index }: { item: any, index: number }) => (
    <View style={styles.appointmentContainer}>
      <Text style={styles.appointmentText}>Ad Soyad: {item.userName}</Text>
      <Text style={styles.appointmentText}>Usta Ad Soyad: {item.ustName}</Text>
      <Text style={styles.appointmentText}>Adres: {item.address}</Text>
      <Text style={styles.appointmentText}>Tarih: {item.selectedDate}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(index)}
      >
        <Text style={styles.deleteButtonText}>Sil</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={appointments}
      renderItem={renderAppointment}
      keyExtractor={(item, index) => index.toString()}
      style={styles.appointmentList}
      ListHeaderComponent={
        <View style={styles.container}>
          <Text style={styles.label}>Adınız Soyadınız:</Text>
          <TextInput
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
            placeholder="Adınız ve Soyadınız"
          />
          
          <Text style={styles.label}>Usta Adı Soyadı:</Text>
          <TextInput
            style={styles.input}
            value={ustName}
            onChangeText={setUstName}
            placeholder="Usta Adı ve Soyadı"
          />

          <Text style={styles.label}>Adresiniz:</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Adresiniz"
            multiline
          />

          <Text style={styles.label}>Randevu Tarihi ve Saati:</Text>
          <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
            <Text style={styles.dateButtonText}>
              {selectedDate ? selectedDate : 'Tarih ve saat seçin'}
            </Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <TouchableOpacity style={styles.button} onPress={handleOrder}>
            <Text style={styles.buttonText}>Randevu Oluştur</Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>
                  Randevunuz başarıyla oluşturuldu!
                </Text>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Tamam</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  dateButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#e8e8e8',
  },
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  appointmentList: {
    marginTop: 30,
    marginBottom: 20,
  },
  appointmentContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: '#ccc',
  },
  appointmentText: {
    fontSize: 15,
    color: 'black',
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RezervasyonPage;
