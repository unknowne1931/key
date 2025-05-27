import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEyeSlash, FaEye} from 'react-icons/fa'; // fa = FontAwesome


const List_page = () => {
  const [questions, setQuestions] = useState([]);

  const [show_info, setShow_info] = useState(false);
  const [show_options, setShow_options] = useState(false);
  const [show_delete, setShow_Delete] = useState(false);


  useEffect(() => {
    // Function to fetch data
    const fetchData = () => {
      fetchQuestions();
    };
  
    // Call it once immediately
    fetchData();
  
    // Set interval to fetch every 10 seconds
    const intervalId = setInterval(fetchData, 10000); // 10000 ms = 10 seconds
  
    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);
  

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost/api/question');
      setQuestions(response.data); // Assuming your API returns an array
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div>
      <center>
        <h1 className='stawro'>staWro</h1>

        <div className='list_page_main_controle-01'>

          <div>
            
            <div
              onClick={() => setShow_info(!show_info)}
              style={{
                width: '60px',
                height: '30px',
                backgroundColor: show_info ? '#4caf50' : '#ccc',
                borderRadius: '30px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '3px',
                  left: show_info ? '32px' : '4px',
                  transition: 'left 0.3s',
                  fontSize: '12px',
                  alignContent: 'center',
                }}
              />
              
            </div>
            <span>Show Info</span>
          </div>

          
          <div>
            
            <div
              onClick={() => setShow_options(!show_options)}
              style={{
                width: '60px',
                height: '30px',
                backgroundColor: show_options ? '#4caf50' : '#ccc',
                borderRadius: '30px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '3px',
                  left: show_options ? '32px' : '4px',
                  transition: 'left 0.3s',
                  fontSize: '12px',
                  alignContent: 'center',
                }}
              />
              
            </div>
            <span>Show Option</span>
          </div>


          <div>
            
            <div
              onClick={() => setShow_Delete(!show_delete)}
              style={{
                width: '60px',
                height: '30px',
                backgroundColor: show_delete ? '#4caf50' : '#ccc',
                borderRadius: '30px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '3px',
                  left: show_delete ? '32px' : '4px',
                  transition: 'left 0.3s',
                  fontSize: '12px',
                  alignContent: 'center',
                }}
              />
              
            </div>
            <span>Show Delete</span>
          </div>

        </div>

        <div className='container-01-lst'>
          <h2 className='h2-01-may-be'>All Questions</h2><br />

          <div className='container-sub-01-lst-2'>
            {questions.length > 0 ? (
              questions.map((question, index) => {

                const delete_by_id = () =>{
                  axios.delete(`http://localhost/api/question/${question._id}`)
                    .then(response => {
                      console.log('Question deleted:', response.data);
                      fetchQuestions();
                    })
                    .catch(error => {
                      console.error('Error deleting question:', error);
                    });
                }


                return(
                  <div key={index} className="question-card" >
                  <h3>Q{index + 1}: {question.question}</h3>

                  {question.image !== "" && question.image !== 'null' && question.image !== 'undefined' &&
                    <div className='image_cnt-01'>
                      <img src={question.image} alt="image" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                    </div>
                  }



                  {show_options &&

                    <div>
                      <div className='list_page_btn-01_cnt'>
                        <button className={question.a === question.answer ? "list_page_btn-01_cnt-button-02" : "list_page_btn-01_cnt-button-01"}>{question.a}</button>
                        <button className={question.b === question.answer ? "list_page_btn-01_cnt-button-02" : "list_page_btn-01_cnt-button-01"} >{question.b}</button>
                      </div>
                      <div className='list_page_btn-01_cnt'>
                        <button className={question.c === question.answer ? "list_page_btn-01_cnt-button-02" : "list_page_btn-01_cnt-button-01"}>{question.c}</button>
                        <button className={question.d === question.answer ? "list_page_btn-01_cnt-button-02" : "list_page_btn-01_cnt-button-01"}>{question.d}</button>
                      </div>
                    </div>

                  }

                  {show_info &&

                    <div className='list_page_btn-01_cnt-new-one-01'>
                      <span className='texts-01'>Cat : <strong>{question.category}</strong> </span>
                      <span className='texts-01'>Diff : <strong>{question.difficulty}</strong> </span>
                      <span className='texts-01'>Type : <strong>{question.type}</strong> </span>
                      <span className='texts-01'>Lang : <strong>{question.language}</strong> </span>
                      <span className='texts-01'>Sec : <strong>{question.seconds}</strong> </span>
                    </div>

                  }
                  <br />
                  {show_delete &&

                  <div>
                    <button className='delete_btn-01' onClick={()=>{delete_by_id()}} >Delete</button>
                  </div>}
                </div>
                )
              }
            )
            ) : (
              <p>Loading questions...</p>
            )}
          </div>

        </div>
        <br/>
      </center>
    </div>
  )
}

export default List_page;
