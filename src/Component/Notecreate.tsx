import React, { useState } from "react";
import { InputBase, Box, Button, styled, Typography } from "@mui/material";
import { NoteObject } from "../models/note.interface";
import { v4 as uuid } from "uuid";

import toast, { Toaster } from 'react-hot-toast';

const Container = styled(Box)`
  & {
    text-align: center;
    display: block;
    width: 100vw;
  }

  & > div > input[type="text"] {
    border: 1px solid #222;
    padding: 10px 15px;
    margin: 1rem;
    width: 400px;
  }

  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -10px;
  }

  & > div > button {
    padding: 10px 15px;
    background-color: green;
    color: #fff;
  }
`;

interface Props {
  addNote: (value: any) => void;
}

const Notecreate: React.FC<Props> = ({ addNote }) => {
  

  const [data, setData] = useState<NoteObject>({
    id: 0,
    title: "",
    details: "",
    color: "",
    date: new Date().toLocaleString().toString(),
  });

  const handleClick = () => {
    if (data.title==="" && data.details.trim()==="") {
        toast("This didn't work. Please Enter all the details",{
            style: {
              borderRadius: '10px',
              background: '#222',
              color: '#fff',
            },
          })

    }else{
        addNote({ ...data, id: uuid() });
        setData({
            id: 0,
            title: "",
            details: "",
            color: "",
            date: new Date().toLocaleString().toString(),
           })
            
          };
    }
    
       
    
  
   

  return (
    <Container>
      <InputBase
        placeholder="Title"
        name="title"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <InputBase
        placeholder="Enter Details Here"
        name="details"
        value={data.details}
        onChange={(e) => setData({ ...data, details: e.target.value })}
      />
      <InputBase
        type="color"
        defaultValue={"#222"}
        name="color"
        onChange={(e) => setData({ ...data, color: e.target.value })}
      />

      <div>
        <Button onClick={handleClick}>Create</Button>
      </div>
      
     
    </Container>
  );
};

export default Notecreate;
