import { MdDelete, MdEdit } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import {Container,TabsContainer,TabButton,JobList,JobCard,DeleteButton,EditLink,Loader,LoaderContainer} from './styles.jsx'
import { Link } from 'react-router-dom';

const API_BASE = 'https://jobs-backend-3.onrender.com/api/jobs';

const loadingMessages = [
  "Just a moment... greatness is loading!",
  "Loading the magic...",
  "Brewing some awesomeness ☕",
  "Spinning up something cool...",
  "Preparing your experience...",
  "Hold tight, we’re almost there!",
  "Good things take time ⏳",
  "Loading like a boss 😎",
  "Fetching data from the matrix...",
  "Compiling awesomeness...",
  "Reticulating splines...",
  "Initializing the flux capacitor...",
  "Booting up your digital assistant...",
  "Connecting to the mothership...",
  "Every great journey begins with a loading screen...",
  "Progress is progress, no matter how slow.",
  "Almost there. Don’t give up now!",
  "Patience leads to excellence...",
];


export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false)
  const loaderMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  const [loadingData, setLoadingData] = useState(loaderMessage)

  useEffect(() => {
    fetchJobs();
  }, [filter]);

  const fetchJobs = async () => {
    setLoading(true)
    const url = filter ? `${API_BASE}/status?status=${filter}` : API_BASE;
    const res = await fetch(url);
    const data = await res.json();
    setJobs(data);
    setLoading(false)
    setLoadingData(loaderMessage)
  };

  const deleteJob = async (id) => {
    await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
    fetchJobs();
  };

  return ( 
  <>
  {loading ?  <LoaderContainer><Loader /><p>{loadingData}</p></LoaderContainer> : <Container>
      <TabsContainer>
  {['All', 'Applied', 'Interview', 'Offer', 'Rejected'].map((status) => {
    const isActive = filter === status || (status === 'All' && filter === '');
    return (
      <TabButton
        key={status}
        onClick={() => setFilter(status === 'All' ? '' : status)}
        active={isActive}
      >
        {status}
      </TabButton>
    );
  })}
</TabsContainer>

      <JobList>
        {jobs.map((job) => (
          <JobCard key={job._id}>
            <p>Company: {job.company}</p>
            <p>Role: {job.role}</p>
            <p>Application-Status: {job.status}</p>
            <p>Posted on: {job.dateOfApplication}</p>
            <p>
              Apply <a href={job.link}>Here</a>
            </p>
            <DeleteButton onClick={() => deleteJob(job._id)}>
              <MdDelete size={25} />
            </DeleteButton>
            <EditLink><Link to={`/edit/${job._id}`}>
              <MdEdit size={25} />
            </Link></EditLink>
          </JobCard>
        ))}
      </JobList>
    </Container>}
   
  </>
    
   
  );
}

