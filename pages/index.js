import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Home() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])
  const [selected, setSelected] = useState([])

  const onEnter = (e) => {
    const { keyCode } = e
    if (keyCode === 13 && todo.length > 0) {
      addToList()
    }
  }

  const addToList = () => {
    setList(arr => [...arr, todo])
    setTodo('')
  }

  const addToSelected = (x) => {
    if (!selected.includes(x)) {
      setSelected([...selected, x])
    } else {
      const arr = selected.filter((item) => (item !== x))
      setSelected(arr)
    }
  }

  const removeSelected = () => {
    const newArr = list.filter(item => !selected.includes(item))
    setList(newArr)
  }

  return (
    <Container onKeyDown={onEnter}>
      <header>
        <TextField
          id="outlined-basic"
          margin="dense"
          label="Add a todo"
          variant="outlined" value={todo}
          onChange={(e) => setTodo(e.target.value)} />
        <Stack
          direction="row"
          spacing={2}>
          <Button
            disabled={todo.length < 1}
            variant="contained"
            onClick={() => addToList()}>
            Add to list
          </Button>
          {selected.length > 0 ? <Button
            color="error"
            variant="contained"
            onClick={() => removeSelected()}>
            Remove
          </Button> : ''}
        </Stack>
      </header>
      <main>
        <FormGroup>
          {list.map((x, i) =>
            <FormControlLabel
              control={<Checkbox onChange={() => {
                addToSelected(x)
              }} />}
              key={i}
              label={x}
            />)}
        </FormGroup>
      </main>
    </Container>
  )
}
