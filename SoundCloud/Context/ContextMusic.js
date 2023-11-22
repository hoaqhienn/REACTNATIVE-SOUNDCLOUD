import { Audio } from "expo-av";
import { createContext, useEffect, useState } from "react";



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
  
    // const [dataMusic, setDataMusic] = useState([]);
    const [sound, setSound] = useState();
    const loadMusic = async (url) => {
        const { sound } = await Audio.Sound.createAsync({
            uri: url
        });
        autoplayTrack(sound);
        setSound(sound);
    }

    const autoplayTrack = async (s) => {
        await s.playAsync();
        const status = await s.getStatusAsync();
        console.log(status.durationMillis);
        
      }
      const playTrack = async () => {
        await sound.playAsync();
        const status = await sound.getStatusAsync();
        console.log(status.durationMillis);
        
      }
    
    const stopTrack = async () => {
         await sound.unloadAsync();
      }
    const pauseTrack = async () => {
        await sound.pauseAsync();
      }
    return <ContextMusic.Provider value={{ data, loadMusic, sound, playTrack ,pauseTrack, stopTrack, musicLoadPlay, dataPlay }}>
        {children}
    </ContextMusic.Provider>;
}