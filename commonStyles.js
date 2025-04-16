import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    flex: 1, 
  },
  backButton: {
    position: "absolute",
    top: height * 0.1,
    left: width * 0.05,
    alignItems: "center",
    borderRadius: 40,
    width: 24,
    height: 24,
    backgroundColor: "#FFFFFF",
  },

  titleContainer: {
    flexDirection: "row", // Делаем заголовок + "ME" в одной строке
    alignItems: "flex-start", // Выравниваем по верхней линии
  },

  title: {
    fontFamily: "Raleway_font",
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#FFFFFF",
    fontSize: width * 0.1, // Делаем адаптивным
    lineHeight: width * 0.11, // Устанавливаем высоту строки
  },

  subtitle: {
    fontFamily: "Raleway_font",
    fontSize: width * 0.06,
    textTransform: "uppercase",
    fontWeight: "400",
    color: "#FFFFFF",
    marginTop: -height * 0.011, // Поднимаем "ME"
    marginLeft: width * 0.01, // Добавляем небольшой отступ
  },
    header: {
      alignItems: 'center',
      marginTop: -height * 0.23,
    
    
  },
  welcomeText:{
    fontFamily: "Raleway_font",
    fontWeight: '900',
    color: "#FFFFFF",
    fontSize: width * 0.08, // Делаем адаптивным
    textAlign:'center',
    textTransform: "uppercase",
  },

  design1:{ 
    position: "absolute", 
    top: height * 0.13, 
    right: width * 0.80,
  },

  design2:{ 
    position: "absolute", 
    top: height * 0.2, 
    right: width * 0.3,
  },

  image_spider1: { 
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',
  },

  shadow1:{ 
    position: "absolute",
    top: height * 0.61, // Чуть ниже паука
  },

  slider:{ 
    position: "absolute",
    bottom: height * 0.27, // Расстояние от нижней части экрана
  },

  design4:{ 
    position: "absolute", 
    top: height * 0.65, 
    right: width * 0.06,
  },

  design3:{ 
    position: "absolute", 
    top: height * 0.74, 
    left: width * 0.1,
  },

  image_spider2:{
    
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',

    
    marginVertical: height * 0.1, // адаптивный отступ между блоками
    marginTop:-height*0.05,
  },

  shadow2:{
    position: "absolute", 
    top: height * 0.43,
    alignItems:'center', 
},
  design6:{
    position: "absolute", 
    top: height * 0.43, 
    right: width * 0.05,
  },

  design5:{
    position: "absolute", 
    top: height * 0.04, 
    right: width * 0.24,
  },
  design7:{ 
    position: "absolute", 
    top: height * 0.7, 
    left: width * 0.1,
  },

  footer:{
    position: "absolute",
  bottom: height * 0.05, // Или 0.1 — на твой вкус
  alignItems:'center',
  width: '100%',
  },

  button:{
    height:height*0.06,
    width:width*0.9,
    borderRadius:13,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
  },

  buttonText:{
    color:'#2B2B2B',
    textAlign:'center',
    fontWeight:600,
    fontFamily:'Raleway_font',
    fontSize: width * 0.03,

  },
  header2:{
    top:-height*0.35,
    alignItems:'center',
  },

  welcomeText2:{
    fontFamily: "Raleway_font",
    fontWeight: '700',
    lineHeight:44.2,
    color: "#FFFFFF",
    fontSize: width * 0.09, // Делаем адаптивным
    textAlign:'center',
    marginBottom:15,
    marginTop:height*0.1,
  },

  welcomeText3:{
    fontFamily: "Poppins_font",
    fontWeight: '400',
    lineHeight:28.2,
    color: "#D8D8D8",
    fontSize: width * 0.05, // Делаем адаптивным
    textAlign:'center',
  },

  image9:{
    position: "absolute",
    top: height * 0.42, // Чуть ниже паука
  },

  contentBlock1: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: height * 0.3,
  },

  contentBlock2: {
    flex: 1,
  justifyContent: 'center', // Либо flex-start
  alignItems: 'center',
  marginTop: -height * 0.4,
  },
  contentBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.12,
    paddingBottom: height * 0.08,
  },
  
  blockSpacing1: {
    marginVertical: -height * 0.03, // адаптивный отступ между блоками
  },

  blockSpacing2: {
    marginVertical: height * 0.24, // адаптивный отступ между блоками
    marginTop:-height*0.01,
  }
  
  
});
