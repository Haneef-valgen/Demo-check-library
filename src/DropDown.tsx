import React,{useState} from 'react'
import { VgCustomStatusDropDown } from '@haneef-valgen/val-my-lib';

const CustomDropDown:React.FC=()=>{
    const [activeStatus, setActiveStatus] = useState('');

    const statusDropDown ={
    
            active: [{id:1,name:'INACTIVE'},{id:2,name:'TERMINATED'}],
        
            inActive: [{id:1,name:'ACTIVE'},{id:2,name:'TERMINATED'}],
        
            invited: [{id:1,name:'UNINVITED'},{id:2,name:'TERMINATED'}],
        
            unInvited: [{id:1,name:'INVITED'},{id:2,name:'TERMINATED'}],
        
        }
    //@ts-ignore
        const handleStatusSelect = (statusChange) => {
    
            setActiveStatus(statusChange);
    
           
    
        }
    
        
        
    
        const statusSxMap = {
    
            0: { backgroundColor: "#edf7ed", color: "#5e7d5f", borderRadius: '4px' },
    
            1: { backgroundColor: "#fff4e5", color: "#6a2e2e", fontSize: '12px', pl: "10px", pr: "6px", pt: "6px", pb: "6px", borderRadius: '4px' },
    
            2: { backgroundColor: "#FDEDED", color: "#5F2120", fontSize: '12px', pl: "10px", pr: "10px", pt: "6px", pb: "6px", borderRadius: '4px' },
    
            3: { backgroundColor: "#E5F6FD", color: "#014361", fontSize: '12px', pl: "10px", pr: "6px", pt: "6px", pb: "6px", borderRadius: '4px' },
    
            4: { display: "flex", alignItems: "center", backgroundColor: "#E5F6FD", color: "#014361", fontSize: '12px', pl: "10px", pr: "6px", pt: "6px", pb: "6px", borderRadius: '4px' },
    
            5: { backgroundColor: "#fff4e5", color: "#6a2e2e", fontSize: '12px', pl: "10px", pr: "6px", pt: "6px", pb: "6px", borderRadius: '4px' },
    
            6: { backgroundColor: "#FDEDED", color: "#5F2120", fontSize: '12px', pl: "10px", pr: "8px", pt: "6px", pb: "6px", borderRadius: '4px' },
    
        };
     
    
        
    
     
    
     
    const  StatusData=["INVITED"||"UNINVITED"||"TERMINATED"];
        const statusValueSetter = () => {
    
            const currentStatusText = activeStatus ? activeStatus : StatusData;
    
            return currentStatusText;
    
        }
    
      
       
    
        const statusSxMapper = () => {
    
            const currentStatusText = activeStatus ? activeStatus : StatusData;
    
            switch (currentStatusText) {
    
                case "ACTIVE":
    
                    return statusSxMap[0];
    
                case "INACTIVE":
    
                    return statusSxMap[1];
    
                case "TERMINATED":
    
                    return statusSxMap[2];
    
                case "INVITED":
    
                    return statusSxMap[3];
    
                case "CHANGEREQUESTED":
    
                    return statusSxMap[4];
    
                case "UNINVITED":
    
                    return statusSxMap[5];
    
                case "DECLINED":
    
                    return statusSxMap[6];
    
                default:
    
                    return {};
    
            }
    
        }
  


return(

   <>
   {StatusData[0] === 'INVITED' &&

<VgCustomStatusDropDown handleStatusSelect={handleStatusSelect} status={statusValueSetter()} sx={statusSxMapper()} statusText={statusDropDown.invited} />

}
   
   </>


)


}

export default CustomDropDown