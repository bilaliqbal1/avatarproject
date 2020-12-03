import React from 'react';

import 'tachyons';
import Avatarlist from './avatarlist';


let Avatar = (props) =>{
    
    let avatarListArray = [
        {
            id:1,
            name: "bilal",
            work : "developer"
        },
        {
            id:2,
            name: "samad",
            work : "designer"
        },
        {
            id:3,
            name: "hassan",
            work : "manager"
        },
        {
            id:4,
            name: "fahad",
            work : 'tester'
        }
    ]
    let arrayavatarcard = avatarListArray.map((item, i) => {
        return <Avatarlist id={avatarListArray[i].name}
            name={avatarListArray[i].name}
            work={avatarListArray[i].work}/>
})
    return (
    <div >
        <h1>Welcome to my portfolio</h1>
           {arrayavatarcard}
            {/* <Avatarlist id={avatarListArray[0].name}
                        name={avatarListArray[0].name}
                        work={avatarListArray[0].work}/>
                        
             <Avatarlist id={avatarListArray[1].name}
                        name={avatarListArray[1].name}
                        work={avatarListArray[1].work}/>

             <Avatarlist id={avatarListArray[2].name}
                        name={avatarListArray[2].name}
                        work={avatarListArray[2].work}/>

         <Avatarlist id={avatarListArray[3].name}
                        name={avatarListArray[3].name}
                        work={avatarListArray[3].work}/> */}
    </div>
    )
}

export default Avatar;

