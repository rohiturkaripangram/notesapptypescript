import { Box, Typography, Card, CardContent, Button, autocompleteClasses, styled } from "@mui/material";
import { NoteObject } from "../models/note.interface";



interface Props {
  note: NoteObject[];
  setNote:React.Dispatch<React.SetStateAction<NoteObject[]>>
}

const Card1=styled(Card)`
 width:400px;
 margin:24px;

`
const Wrapper=styled(Box)`

&>button{
    border:2px solid #222;
    background:#fff;
    margin-top:0.5rem;
}`
const Notes: React.FC<Props> = ({ note, setNote}) => {
    const handleDelete=(id:number)=>{
        const updatedNote = note.filter((item) => item.id !== id);
        setNote(updatedNote);
        // localStorage.setItem('note',JSON.stringify(updatedNote))
        
    }


  return (
    <div style={{ padding: 10, display:'flex', justifyContent:'flex-start',flexWrap:'wrap' }}>
      {note.map((element) => (
        <Card1 style={{backgroundColor:element.color}}>
          <CardContent>
            <Wrapper>
              <Typography>{element.title}</Typography>
              <Typography>{element.details}</Typography>
              <Typography>{element.date}</Typography>
              <Button variant='outlined' onClick={()=>handleDelete(element.id)}>Delete</Button>

            </Wrapper>
          </CardContent>
        </Card1>
      ))}
    </div>
  );
};
export default Notes;
