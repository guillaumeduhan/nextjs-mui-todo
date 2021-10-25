import { useState, setState } from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Home() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])

  const onEnter = (e) => {
    const { keyCode } = e
    if (keyCode === 13) {
      addToList()
    }
  }

  const addToList = () => {
    setList(x => [...x, todo])
    setTodo('')
  }
  
  return (
    <Container onKeyDown={onEnter}>
      <header>
        <TextField id="outlined-basic" margin="dense" label="Add a todo" variant="outlined" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <div>
          <Button variant="contained" onClick={() => addToList()}>Add to list</Button>
        </div>
      </header>
      <main>
        <FormGroup>
          {list.map((x, i) => <FormControlLabel control={<Checkbox />} key={i} label={x} />)}
        </FormGroup>
      </main>
    </Container>
  )
}
