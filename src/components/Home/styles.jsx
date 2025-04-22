import styled, { keyframes } from 'styled-components';

const API_BASE = 'https://jobs-backend-3.onrender.com/api/jobs';

export const Container = styled.div`
  max-width: 900px;
  margin: auto;
`;

export const TabsContainer = styled.div`
  width: 800px;
  margin: 40px auto;
  display: flex;
  justify-content: space-evenly;
`;

export const TabButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-size: 25px;
  cursor: pointer;
  border-bottom:  ${(props) => (props.active ? '2px solid blue' : 'none')};
  color: ${(props) => (props.active ? 'orange' : 'black')};
  font-weight: ${(props) => (props.active ? '800' : '700')};
  transition: all 0.2s ease;

  &.underline {
    border-bottom: 1px solid oranged;
  }
`;

export const JobList = styled.ul`
  width: 800px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const JobCard = styled.li`
  background: #ecf1ce;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
  font-weight: 800;
  list-style-type: none;
  text-align: center;

  &:hover {
    transform: scale(1.02);
  }

  p {
    margin: 0.4rem 0;
    color: #333;
  }

  a {
    color: #0d6efd;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DeleteButton = styled.button`
  padding: 0.4rem 0.8rem;
  border: none;
  background-color: transparent;
  color: black;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c82333;
    color: white;
  }
`;

export const EditLink = styled.span`
  color: black;
  text-decoration: none;

  &:hover {
    background-color: #0d6efd;
    padding: 10px;
  }

`;


const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border-top: 16px solid blue;
  border-right: 16px solid green;
  border-bottom: 16px solid red;
  border-left: 16px solid pink;
  width: 50px;
  height: 50px;
  animation: ${spin} 5s linear infinite;
`;

export const LoaderContainer = styled.div`
display: flex;
 color: #000000;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 30px;
  `
