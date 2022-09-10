import styled,{css} from 'styled-components/native';

export type DoctorProps ={
  typeSpecialist: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})<DoctorProps>`
  width:45%;

  margin:7px;
  padding:22px;
  
  border-radius: 7px;
  background-color:${({theme,typeSpecialist})=> 
    typeSpecialist === 'primary'? theme.COLORS.INFO : 'green'};

  align-items:center;
  justify-content:center;

  ${({typeSpecialist,theme})=> typeSpecialist === 'primary' && css`
      border: 5px solid ${theme.COLORS.TEXT_SECONDARY};
  `};
`;

export const Avatar = styled.Image`
 height:80px;
 width:80px;
 border-radius:40px;
`;

export const Name = styled.Text`
  margin-top: 7px;
  font-size:14px;

  text-align:center;
  font-weight: 700;
  
  color:${({theme})=>theme.COLORS.TEXT_PRIMARY};
`;

export const Specialist = styled.Text`
  font-size:12px;
  color:${({theme})=>theme.COLORS.TEXT_PRIMARY};
`;

  