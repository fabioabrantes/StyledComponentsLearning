import {Doctor,DoctorDataProps} from '../components/Doctor';

import { Container, List } from './styles';

const DATA:DoctorDataProps[] = [
  {
    id: '1',
    name:'fabio abrantes',
    avatar:'https://github.com/fabioabrantes.png',
    specialist:'clinico médico'
  },
  {
    id: '2',
    name:'fabio abrantes',
    avatar:'https://github.com/fabioabrantes.png',
    specialist:'clinico médico'
  },
  {
    id: '3',
    name:'fabio abrantes',
    avatar:'https://github.com/fabioabrantes.png',
    specialist:'clinico médico'
  },
  {
    id: '4',
    name:'fabio abrantes',
    avatar:'https://github.com/fabioabrantes.png',
    specialist:'clinico médico'
  }
];

export function Home() {
  return (
    <Container>
      <List 
        data={DATA}
        keyExtractor={item=>item.id}
        renderItem ={({item})=><Doctor typeSpecialist='primary' data={item}/> }
        numColumns={2}
      />
      
    </Container>
  );
}