import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "اب و هوای شیراز"


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} 
      style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)",
        backgroundImage:'url("https://irmapserver.ir/research/28/bg.webp")',
        // backgroundSize:"cover"
       }}>
       

        <c-x>
         {/* <f-20 style={{padding:"0 20px",color:"darkslategray"}}>اب و هوا:</f-20> */}
         <br-x/>
          <f-cse>
          <f-cc style={{height:65,width:300,backgroundColor:"skyblue",borderRadius:17}}>
          <img src = "https://irmapserver.ir/research/0/temp.webp" 
           style={{height:25,objectFit:"contain"}}/>
           <sp-3/>
          <f-cc>
          <f-14>weatherFeelsLikeC:</f-14>
            <sp-4/>
            <f-14>°</f-14>
            <f-14>c</f-14>
            <sp-4/>
            <f-14>{props.Feelslikec}</f-14>
           </f-cc>
          </f-cc>
          <f-cc style={{height:65,width:300,backgroundColor:"skyblue",borderRadius:17}}>
          <img src = "https://irmapserver.ir/research/28/humidity%204.png"
           style={{height:25,objectFit:"contain"}}/>
           <sp-4/>
          <f-cc>
          <f-14>humidity:</f-14>
            <sp-4/>
            <f-14>RH</f-14>
            <f-14>%</f-14>
            <sp-4/>
            <f-14>{props.humidity}</f-14>
           </f-cc>
          </f-cc>
          </f-cse>
          <br-x/>
          <f-cse>
         <f-cc style={{height:65,width:300,backgroundColor:"skyblue",borderRadius:17}}>
          <img src = "https://irmapserver.ir/research/28/pre.png" 
           style={{height:25,objectFit:"contain"}}/>
           <sp-3/>
          <f-cc>
          <f-14>pressure:</f-14>
            <sp-4/>
            {/* <f-14>°</f-14>
            <f-14>c</f-14> */}
            <sp-4/>
            <f-14>{props.pressure}</f-14>
           </f-cc>
          </f-cc>
          <f-cc style={{height:65,width:300,backgroundColor:"skyblue",borderRadius:17}}>
          <img src = "https://irmapserver.ir/research/28/cl.png" 
           style={{height:25,objectFit:"contain"}}/>
           <sp-2/>
          <f-cc>
          <f-14>cloudcover:</f-14>
            <sp-4/>
          
            <sp-4/>
            <f-14>{props.cloudcover}</f-14>
           </f-cc>
          </f-cc>
         </f-cse>
          <br-x/>
         <f-cse>
         <f-cc style={{height:65,width:300,backgroundColor:"skyblue",borderRadius:17}}>
          <img src = "https://irmapserver.ir/research/0/temp.webp" 
           style={{height:25,objectFit:"contain"}}/>
           <sp-3/>
          <f-cc>
          <f-14>temp_C:</f-14>
            <sp-4/>
            <f-14>°</f-14>
            <f-14>c</f-14>
            <sp-4/>
            <f-14>{props.Feelslikec}</f-14>
           </f-cc>
          </f-cc>
          <f-cc style={{height:65,width:300,backgroundColor:"skyblue",borderRadius:17}}>
          <img src = "https://irmapserver.ir/research/28/windspeed.png" 
           style={{height:25,objectFit:"contain"}}/>
           <sp-3/>
          <f-cc>
          <f-14>windspeedKmph:</f-14>
            <sp-4/>
            <f-14>°</f-14>
            <f-14>c</f-14>
            <sp-4/>
            <f-14>{props.Feelslikec}</f-14>
           </f-cc>
          </f-cc>
         </f-cse>
         <br-x/>
         <br-x/>
         
        
         {/* <f-cc style={{width:"100%",backgroundColor:"steelblue"}}>
          <f-13>تهیه شده توسط الیا مرادی</f-13>
         </f-cc> */}
         <br-x/>
     
         
         
        </c-x>


       
        {/* // <div style = {{direction:"ltr",fontSize:23}}>
        //  <span>weatherFeelsLikeC:{props.Feelslikec} °C</span>
        //  <br/>
        //  <span>humidity:{props.humidity} % RH</span>
        //  <br/>
        //  <span>pressure: {props.pressure}</span>
        //  <br/>
        //  <span>temp_F:{props.temp_F}</span>
        //  <br/>
        //  <span>temp_C:{props.temp_C}</span>
        //  <br/>
        //  <span>windspeedKmph:{props.windspeedKmph}</span>
        // </div> */}

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;
  let data = await(await fetch ("https://irmapserver.ir/research/api/weather")).json()
     
      let Feelslikec = data.current_condition[0].FeelsLikeC
      let humidity = data.current_condition[0].humidity
      let pressure = data.current_condition[0].pressure
      let cloudcover = data.current_condition[0].cloudcover
      let temp_C = data.current_condition[0].temp_C
      let windspeedKmph = data.current_condition[0].windspeedKmph
      
  return {
    props: {
      data: global.QSON.stringify({
        session,
        Feelslikec,
        humidity,
        pressure,
        cloudcover,
        temp_C,
        windspeedKmph,
      
        // nlangs,
      })
    },
  }
}