import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importing axios for making HTTP requests

const Add_page = () => {
    const [length, setLength] = useState('')
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
        a: '',
        b: '',
        c: '',
        d: '',
        language: '',
        category: '',
        difficulty: '',
        type: '',
        image: '',
        seconds: '',
    });

    useEffect(()=>{
        get_length()
    },[])

    const get_length = () =>{
        axios.get("http://localhost/api/questions/length")
            .then(response => {
            setLength(response.data.count);
            })
            .catch(error => {
            console.error('Error fetching question length:', error);
        });
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Preventing default form submission
        console.log(formData); // Logging form data for debugging

        try {
            // Posting form data to your API
            const response = await axios.post('http://localhost/api/question', formData);
            console.log('Data submitted successfully:', response.data);
            get_length()
        
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div>
            <center>
                <h1 className="stawro">staWro</h1>

                <div className='list_page_qno_len'
                >
                <h1>Total Questions : {length}</h1>
                </div>

                <div className="container-01-lst">
                    <h2 className="h2-01-may-be">Add Questions</h2><br />

                    <form className="container-sub-01-lst" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="input-01-lst"
                            placeholder="Question"
                            name="question"
                            value={formData.question}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            className="input-01-lst"
                            placeholder="Option A"
                            name="a"
                            value={formData.a}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            className="input-01-lst"
                            placeholder="Option B"
                            name="b"
                            value={formData.b}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            className="input-01-lst"
                            placeholder="Option C"
                            name="c"
                            value={formData.c}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            className="input-01-lst"
                            placeholder="Option D"
                            name="d"
                            value={formData.d}
                            onChange={handleChange}
                            required
                        />

                        {/* Select Correct Answer */}
                        <select
                            className="input-01-lst"
                            name="answer"
                            value={formData.answer}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Correct Answer</option>
                            {formData.a && <option value={formData.a}>A: {formData.a}</option>}
                            {formData.b && <option value={formData.b}>B: {formData.b}</option>}
                            {formData.c && <option value={formData.c}>C: {formData.c}</option>}
                            {formData.d && <option value={formData.d}>D: {formData.d}</option>}
                        </select>

                        <select
    className="input-01-lst"
    name="language"
    value={formData.language}
    onChange={handleChange}
    required
>
    <option value="">Select Language</option>
    <option value="English">English</option>
    <option value="Kannada">Kannada</option>
    <option value="Telugu">Telugu</option>
    <option value="Hindi">Hindi</option>
</select>

<select
    className="input-01-lst"
    name="category"
    value={formData.category}
    onChange={handleChange}
    required
>
    <option value="">Select Category</option>
    <option value="GK">GK</option>
    <option value="Mental Ability">Mental Ability</option>
    <option value="News">News</option>
    <option value="Logics">Logics</option>
    <option value="science">Science</option>
    <option value="maths">Maths</option>
    <option value="history">History</option>
    <option value="others">Others</option>
</select>

                        <select
    className="input-01-lst"
    name="difficulty"
    value={formData.difficulty}
    onChange={handleChange}
    required
>
    <option value="">Select Difficulty</option>
    <option value="Too Easy">Too Easy</option>
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Tough">Tough</option>
    <option value="Too Tough">Too Tough</option>
</select>

<select
    className="input-01-lst"
    name="type"
    value={formData.type}
    onChange={handleChange}
    required
>
    <option value="">Select Type</option>
    <option value="find num">find num</option>
    <option value="find person">find person</option>
    <option value="GK">GK</option>
    <option value="calender">calender</option>
    <option value="sum">sum</option>
    <option value="shadow">shadow</option>
    <option value="odd">odd</option>
    <option value="place">place</option>
    <option value="omr">omr</option>
    <option value="clock">clock</option>
    <option value="spelling">spelling</option>
    <option value="sentence">sentence</option>
    <option value="true or false">true or false</option>
    <option value="num & char">num & char</option>
    <option value="key board">key board</option>
    <option value="q1">q1</option>
    <option value="q2">q2</option>
    <option value="q3">q3</option>
    <option value="q4">q4</option>
    <option value="q5">q5</option>
    <option value="q6">q6</option>
    <option value="q7">q7</option>
    <option value="q8">q8</option>
    <option value="q9">q9</option>
    <option value="q10">q10</option>
    <option value="other">other</option>
</select>

                        <input
                            type="text"
                            className="input-01-lst"
                            placeholder="Image URL (optional)"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            className="input-01-lst"
                            placeholder="Time in Seconds"
                            name="seconds"
                            value={formData.seconds}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="input-01-lst-btn-01" style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                            Submit
                        </button>
                    </form>
                </div>
            </center>
        </div>
    );
}

export default Add_page;
