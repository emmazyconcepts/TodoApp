

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Keyboard, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Taskinput from './Compo/Taskinput';
import Taskitem from './Compo/Taskitem';
import React, {useEffect, useLayoutEffect, useState} from 'react';


export default function App() {

  const [tasks, setTasks] = useState([]);

  const [notask, setNotask] = useState(true)

  const [num, setNum] = useState(0)

 


  useLayoutEffect(() => {
    if(tasks.length === 0){
       setNotask(true)
       alert("No task avalable")
 
    }else{
      setNotask(false)
      setNum(tasks.length)
    }
  },[tasks])


  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
   
    <View style={styles.container}>
        <Text className="text-red-600 text-center mt-12 text-2xl font-extrabold">Boboyetec task app</Text>
      <ScrollView style={styles.scrollView}>

      <Text className="text-white text-left text-sm font-extrabold ml-2 mt-3">Welcome Emmanuel <Text className = " text-red-400">it's Wednesday 25/01/2023</Text></Text>



      <Text className=" text-white text-xl font-bold mt-3 mb-2 ml-2">Your Task </Text>

      { !notask && (
        <Text className=" text-red-400 text-xl font-bold mt-3 mb-2 ml-2">You have {num} task  today </Text>

      )}


      { notask && (
        <Text className=" text-red-400 text-xl font-bold mt-3 mb-2 ml-2">You have no task no today  </Text>

      )}
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <Taskitem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }

      <View className = " p-5">
      <Text className=" text-white text-xl font-bold mt-3 mb-2">Glory Tasks</Text>
      <View className = " bg-white rounded-md p-5">
      <Text className=" text-black text-base underline text-center">MONDAY</Text>

      <Text className=" text-black text-base">1: Update Designs</Text>
      <Text className=" text-black text-base">2: Update Designs</Text>
      <Text className=" text-black text-base">3: Update Designs</Text>

      <TouchableOpacity  className=" text-black bg-slate-600 text-center p-1 rounded-full mt-2 ">
      <Text className=" text-white bg-slate-600 text-center p-1 rounded-full"> Call </Text>
      </TouchableOpacity>



      </View>

      </View>

      <View className = " p-5">
      <Text className=" text-white text-xl font-bold mt-3 mb-2">Test Tasks</Text>
      <View className = " bg-white rounded-md p-5">
      <Text className=" text-black text-base underline text-center">MONDAY</Text>

      <Text className=" text-black text-base">1: Update test</Text>
      <Text className=" text-black text-base">2: Update test</Text>
      <Text className=" text-black text-base">3: Update test</Text>

      <TouchableOpacity  className=" text-black bg-slate-600 text-center p-1 rounded-full mt-2 ">
      <Text className=" text-white bg-slate-600 text-center p-1 rounded-full"> Call </Text>
      </TouchableOpacity>



      </View>

      </View>

          <View className = " p-5">
      <Text className=" text-white text-xl font-bold mt-3 mb-2">Ola Tasks</Text>
      <View className = " bg-white rounded-md p-5">
      <Text className=" text-black text-base underline text-center">MONDAY</Text>

      <Text className=" text-black text-base">1: Update Designs</Text>
      <Text className=" text-black text-base">2: Update system</Text>
      <Text className=" text-black text-base">3: Update </Text>

      <TouchableOpacity  className=" text-black bg-slate-600 text-center p-1 rounded-full mt-2 ">
      <Text className=" text-white bg-slate-600 text-center p-1 rounded-full"> Call </Text>
      </TouchableOpacity>



      </View>

      </View>

      <View className = " p-5">
      <Text className=" text-white text-xl font-bold mt-3 mb-2">CEO Tasks</Text>
      <View className = " bg-white rounded-md p-5">
      <Text className=" text-black text-base underline text-center">MONDAY</Text>

      <Text className=" text-black text-base">1: Call XZY</Text>
      <Text className=" text-black text-base">2: Update XYZ</Text>

      <TouchableOpacity  className=" text-black bg-slate-600 text-center p-1 rounded-full mt-2 ">
      <Text className=" text-white bg-slate-600 text-center p-1 rounded-full"> Call </Text>
      </TouchableOpacity>



      </View>

      </View>


      </ScrollView>
      <Taskinput addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});




