import { 
  Container,
  Avatar,
  Name,
  Specialist,
  DoctorProps,
 } from './styles';

export type DoctorDataProps = {
  id:string;
  name:String;
  avatar:string;
  specialist:string;
}
type Props = DoctorProps & {
  data: DoctorDataProps;
}

export function Doctor({typeSpecialist,data,... rest}:Props) {
  return (
    <Container typeSpecialist={typeSpecialist} {...rest}>
      <Avatar source={{uri:data.avatar}}/>
      
      <Name>{data.name}</Name>

      <Specialist>{data.specialist}</Specialist>
    </Container>
  );
}