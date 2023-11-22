import { Audio } from "expo-av";
import { createContext, useEffect, useState } from "react";



export const ContextMusic = createContext({});


export const ContextMusicProvider = ({ children }) => {
    const [musicdata, setMusicData] = useState([]);
    useEffect(() => {
        fetch('https://6544afd55a0b4b04436cbf81.mockapi.io/soundcloud/music')
            .then(response => response.json())
            .then(data => {
                setMusicData(data);
            })
    }, []);
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
    return <ContextMusic.Provider value={{ musicdata, loadMusic, sound, playTrack ,pauseTrack, stopTrack }}>
        {children}
    </ContextMusic.Provider>;
}