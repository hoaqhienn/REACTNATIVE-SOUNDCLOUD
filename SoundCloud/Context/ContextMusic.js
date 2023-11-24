import { Audio } from "expo-av";
import { createContext, useEffect, useState } from "react";
import { Ionicons, Foundation, Entypo, Feather, AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';


export const ContextMusic = createContext({});


export const ContextMusicProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://655e2b5a9f1e1093c59aa3d1.mockapi.io/api/music')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
    }, []);

    const [dataPlay, setDataPlay] = useState([]);
    const musicLoadPlay = (id) => {
        fetch('https://655e2b5a9f1e1093c59aa3d1.mockapi.io/api/music/'+id)
            .then(response => response.json())
            .then(data => {
                setDataPlay(data);
            })
    }
    const [statusPlay, setStatusPlay] = useState();
    // const [dataMusic, setDataMusic] = useState([]);
    const [sound, setSound] = useState();
    const [lastPosition, setLastPosition] = useState();
    const loadMusic = async (url) => {
        const { sound } = await Audio.Sound.createAsync({
            uri: url
        });
        const status = await sound.getStatusAsync();
        sound.setOnPlaybackStatusUpdate(status => {
            setLastPosition(status.positionMillis);
          });
        autoplayTrack(sound);
        setSound(sound);
        
    }
    const [durationMillis, setDurationMillis] = useState();  
    const autoplayTrack = async (s) => {
        await s.playAsync();
        const status = await s.getStatusAsync();
      console.log(status);
      setCurrentIcon(icon2)
      setCurrentIconAdd(iconAdd1)
      setCurrentIconAdd1(iconAdd11)
      setCurrentIconLove(iconLove1)
      setCurrentIconPlay(iconPlay2)
      setDurationMillis(status.durationMillis);
        
      }
      const playTrack = async () => {
        await sound.playAsync();
        const status = await sound.getStatusAsync();
        setDurationMillis(status.durationMillis);
        console.log(status);  
      }
    
    const stopTrack = async () => {
         await sound.unloadAsync();
         const status = await sound.getStatusAsync();
      }
    const pauseTrack = async () => {
        await sound.pauseAsync();
        const status = await sound.getStatusAsync();
        console.log(status);
      }

    
    const icon1 = <Foundation name="play" size={26} color="white" style={{ paddingHorizontal: 20 }} />
    const icon2 = <Foundation name="pause" size={26} color="white" style={{ paddingHorizontal: 20 }} />
    const [currentIcon, setCurrentIcon] = useState(icon1)
    const SetIconPlay = () => {
        setCurrentIcon(icon2)
    }
    const SetIcon = () => {
        if (currentIcon.props.name === "play") {
            setCurrentIcon(icon2)
            setCurrentIconPlay(iconPlay2)
            playTrack();
          }
          else {
            setCurrentIcon(icon1)
            setCurrentIconPlay(iconPlay1)
            pauseTrack();
          }
    }


    const iconLove1 = <AntDesign name="hearto" size={21} color="white" style={{ paddingRight: 20 }} />
    const iconLove2 = <AntDesign name="heart" size={21} color="red" style={{ paddingRight: 20 }} />
    const [currentIconLove, setCurrentIconLove] = useState(iconLove1)
    const SetIconLove = () => {
        if (currentIconLove.props.name === "hearto") {
            // console.log(iconAdd1.props.name);
            setCurrentIconLove(iconLove2)
          }
          else {
            setCurrentIconLove(iconLove1)
          }
    }


    const iconAdd1 = <Feather name="user-plus" size={23} color="white" style={{ paddingRight: 20 }} />
    const iconAdd2 = <FontAwesome5 name="user-check" size={18} color="red" style={{ paddingRight: 20 }} />
    const [currentIconAdd, setCurrentIconAdd] = useState(iconAdd1)
    const SetIconAdd = () => {
        if (currentIconAdd.props.name === "user-plus") {
            setCurrentIconAdd(iconAdd2)
            setCurrentIconAdd1(iconAdd22)
          }
          else {
            setCurrentIconAdd(iconAdd1)
            setCurrentIconAdd1(iconAdd11)
          }
    }

    const iconAdd11 = <Feather name="user-plus" size={30} color="black" style={{padding:5}} />
    const iconAdd22 = <Feather name="user-check" size={30} color="black"  style={{padding :5}}/>
    const [currentIconAdd1, setCurrentIconAdd1] = useState(iconAdd11)
    const SetIconAdd1 = () => {
        if (currentIconAdd1.props.name === "user-plus") {
            setCurrentIconAdd(iconAdd2)
            setCurrentIconAdd1(iconAdd22)
          }
          else {
            setCurrentIconAdd(iconAdd1)
            setCurrentIconAdd1(iconAdd11)
          }
    }
    
    const iconPlay1 = <AntDesign name="play" size={55} color="white" />
    const iconPlay2 = <Ionicons name="md-pause-circle-sharp" size={67} color="white" />
    const [currentIconPlay, setCurrentIconPlay] = useState(iconPlay1)
    const SetIconPlayTrack = () => {
        if (currentIconPlay.props.name === "play") {
            setCurrentIconPlay(iconPlay2)
            setCurrentIcon(icon2)
            playTrack();
          }
          else {
            setCurrentIconPlay(iconPlay1)
            setCurrentIcon(icon1)
            pauseTrack();
          }
    }


    async function playAndSeek() {
        try {
          await sound.playAsync(); // Bắt đầu phát nhạc
          await sound.setPositionAsync(30 * 1000); // Di chuyển đến 30 giây
        } catch (error) {
          console.error('Error playing sound:', error);
        }
      }

      async function getRandomSong() {
      
        const randomSong = data[Math.floor(Math.random() * data.length)];
        
        return randomSong; 
      }
    return <ContextMusic.Provider value={{ data, loadMusic, sound, playTrack ,pauseTrack, 
                                            stopTrack, musicLoadPlay, dataPlay, SetIcon,currentIcon, 
                                            SetIconPlay, SetIconLove,currentIconLove, 
                                            SetIconAdd, currentIconAdd, statusPlay, setStatusPlay, playAndSeek, lastPosition,
                                            SetIconAdd1,currentIconAdd1,durationMillis,
                                            currentIconPlay,SetIconPlayTrack, getRandomSong, setDataPlay }}>
        {children}
    </ContextMusic.Provider>;
}