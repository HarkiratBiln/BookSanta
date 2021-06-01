import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Header, Icon } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ReceiverDetailsScreen extends Component{
    constructor(props) {
        super(props);
        this.state={
           userId: firebase.auth().currentUser.email,
           userName: "",
           receiverId: this.props.navigation.getParam("details")["user_id"],
           requestId: this.props.navigation.getParam("details")["request_id"],
           bookName: this.props.navigation.getParam("details")["book_name"],
           reasonForRequest: this.props.navigation.getParam("details")["reason_to_request"],
           receiverName: "",
           receiverContact: "",
           receiverAddress: "",
           receiverRequestDocId: "",
        }
    }



    getReceiverDetails() {
        db.collection("users").where("email_id","==",this.state.receiverId).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                this.setState({
                    receiverName: doc.data().first_name,
                    receiverContact: doc.data().contact,
                    receiverAddress: doc.data().address,
                    
                })
            })
        })
    }
  

    updateBookStatus = ()=>{
        db.collection("all_donations").add({
            book_name: this.state.bookName,
            request_id: this.state.requestId,
            requested_by: this.state.receiverName,
            donor_id: this.state.userId,
            request_status: "Donor Interested",
        })

    }


    addNotification = ()=>{
      var message = this.state.userName+"  has shown interest into donating the book"
      db.collection("all_notifications").add({
        targeted_user_id: this.state.receiverId,
        donor_id: this.state.userId,
        request_id: this.state.requestId,
        book_name: this.state.bookName,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        notification_status: "unread",
        message: message,
      })
    }
  
  
    render(){
  return (
    <View>
      <View style = {styles.buttonContainer} >
          {
              this.state.receiverId !== this.state.userId
              ?(
                  <TouchableOpacity style = {styles.button} 
                  onPress = {()=>{
                      this.updateBookStatus()
                      this.addNotification()
                      this.props.navigation.navigate("MyDonations")
                  }}
                  >
                    <Text> I want to Donate </Text>
                  </TouchableOpacity>
              )
              : null
          }
      </View>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer : {
    flex:0.3,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:200,
    height:50,
    justifyContent:'center',
    alignItems : 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  }
});
