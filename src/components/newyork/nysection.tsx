


import '../newyork/newyork.css'
import { useState } from 'react';
import { useEffect } from 'react';
import ny from '../images/nystatelogo.jpg'



   interface Data {
    stateData?: {
        airQuality:string;
        treePollen:string;
        ragweedPollen:string;
        mold:string;
        grassPollen:string;
        dustDander:string

    }

   }

   

  const NYSection = () => {
    const [nyWeather, setNYWeather] = useState<string | null>('')
    const [data, setData] = useState<Data>()
    const [nyError, setNYError] = useState('');

    enum NewYorkInfo {
        NAME = 'New York',
        STATE= 'NY',
        COUNTRY = 'UNITED STATES',
        AIR = 'Hows The Air Quality? ',
        TREE = 'Tree Pollen',
        RAGWEED = 'Ragweed Pollen',
        NYMOLD = 'Mold',
        GRASSPOLLEN = 'GrassPollen',
        DUST = 'Dust Dander'
        
    }
 

    useEffect(() => {
        const stateData:{airQuality:string, treePollen:string, ragweedPollen:string, mold:string, grassPollen:string, dustDander:string} = {
            airQuality:'The Air Quality in New York is Fair',
            treePollen:'Tree Pollen is Low',
            ragweedPollen:'Ragweed Pollen is High',
            mold:'Mold is Low',
            grassPollen:'GrassPollen is Moderate',
            dustDander: 'Dust Dander is High'    
       }
      
        setData({ stateData }) 

    
    }, [])

   



    return (
        <>
            <div className='NY-Header-Container'>
                
            </div>




            <div className='NY-Content-Container'>
                 <header className='NY-Content-Wrapper'>

            <div><div><h3>New York Weather </h3></div></div>
            <div><div><img src={ny}></img></div></div>

                </header>

            </div>
            
            
            
            
            
            
            
            
            
            {/*---------------------------------CONTENT WEATHER -----------------------------------------*/}

            <main className='Main-Content'>
                <div className='Main-Wrapper'>

                 <div><div><div><p><b>Fall</b> New York experiences crisp, 
                    cool weather in fall, with temperatures ranging from 50°F to 70°F, and the landscape
                     transforms with vibrant autumn foliage.</p></div></div></div>

                     <div><div><p><b>Winter:</b> Winters in New York are cold and snowy, 
                        with temperatures often dropping below freezing and occasional snowstorms, 
                        creating a festive, wintry atmosphere.</p></div></div>
                        
                        <div><div><p><b>Spring:</b> Spring in New York sees a gradual warming,
                             with temperatures rising from the 40s°F to the 60s°F, as the city blossoms with colorful 
                             flowers and greenery.</p></div></div>


                             <div><div><p><b>Summer:</b> Summers in New York are warm and humid, with temperatures 
                                ranging from 70°F to 90°F, making it ideal for outdoor activities and enjoying 
                                the city’s parks and beaches.</p></div></div>

                </div>


                



            </main>


                {/*---------------------------------CONTENT-----------------------------------------*/}
                    <div className='Content-Container'>
                        <div className='Content-Wrapper'>

                            <div><div><h3>{NewYorkInfo.NAME}</h3></div></div>

                           <div><div><h3>{NewYorkInfo.STATE}</h3></div></div>

                           <div><div><h3>{NewYorkInfo.COUNTRY}</h3></div></div>

                        </div>

                            
                            <div className='Content-Wrapper-Two'>

                                <div><div><h3>{NewYorkInfo.AIR}</h3></div></div>

                                <div><div><p>{data && data.stateData && (
                                    <div><p>{data.stateData.airQuality}</p></div>
                                )}</p></div></div>

                                <div><div><h3>{NewYorkInfo.TREE}</h3></div></div>
                                <div><div><p>{data && data.stateData && (
                                    <div><p>{data.stateData.treePollen}</p></div>
                                )}</p></div></div>


                            <div><div><h3>{NewYorkInfo.RAGWEED}</h3></div></div>
                            <div><div><p>{data && data.stateData && (
                                    <div><p>{data.stateData.ragweedPollen}</p></div>
                                )}</p></div></div>


                                   <div><div><h3>{NewYorkInfo.NYMOLD}</h3></div></div>
                                   <div><div><p>{data && data.stateData && (
                                           <div><p>{data.stateData.mold}</p></div>
                                       )}</p></div></div>



                        <div><div><h3>{NewYorkInfo.GRASSPOLLEN}</h3></div></div>
                            <div><div><p>{data && data.stateData && (
                                    <div><p>{data.stateData.grassPollen}</p></div>
                                )}</p></div></div>



                        <div><div><h3>{NewYorkInfo.DUST}</h3></div></div>
                            <div><div><p>{data && data.stateData && (
                                    <div><p>{data.stateData.dustDander}</p></div>
                                )}</p></div></div>

                            </div>

                            




                    </div>








        
        </>
    )
}

export default NYSection
