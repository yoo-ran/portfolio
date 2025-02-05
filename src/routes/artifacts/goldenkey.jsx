import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faCircleCheck,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Narrative from '../../prjContents/Narrative';
import DevNarr from '../../prjContents/DevNarr';
import SEO from '../../components/Seo';
import PrjMenu from '../../components/PrjMenu';
import ChildCode from '../highlights/multistep/ChildCode';

import tailwind from '../../images/skills/tailwind.png';
import mysql from '../../images/skills/mysql.png';
import react from '../../images/skills/react.png';
import node from '../../images/skills/node.png';
import css from '../../images/skills/css.png';
import html from '../../images/skills/html.png';
import express from '../../images/skills/express.png';
import chatgpt01 from '../../images/dejapp/chatgpt_prompt01.png';
import chatgpt02 from '../../images/dejapp/chatgpt_prompt02.png';
import homepage01 from '../../images/dejapp/homepage01.jpg';
import homepage02 from '../../images/dejapp/homepage02.jpg';
import detailpage from '../../images/dejapp/detailpage.jpg';
import likepage from '../../images/dejapp/likepage.jpg';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Goldenkey() {
  const [page, setPage] = useState('');

  const newPage = (newP) => {
    setPage(newP);
  };

  useEffect(() => {
    if (page != '') {
      let section = document.getElementById(page);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [page]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.article',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1, // Animation duration for each item
        stagger: 0.3, // Delay between each item appearing
      }
    );
  }, []);

  return (
    <main className='flex flex-col gap-y-20  mb-40 md:pt-0 '>
      <PrjMenu newPage={newPage} page={page} />

      <SEO
        title='Golden Key_Yooran Kim'
        description="Explore the Real Estate App project by Yooran Kim, a frontend developer focused on creating intuitive and user-friendly web applications. This project highlights Yooran's expertise in developing a comprehensive real estate platform that allows users to browse properties, view detailed listings, and save their favorite properties. Learn about the technologies used, including React, Node.js, and MySQL, to build a dynamic and responsive app that enhances the property search experience."
        name='Yooran Kim'
        type='website'
        keywords='frontend developer, web developer, real estate app, property listings, React, Node.js, MySQL'
        url='https://yoorankim.com/goldenkey'
      />

      {/* <PrjMenu/> */}
      <div className='flex flex-col lg:flex-row items-center w-full gap-y-14 md:mt-10 md:w-8/12'>
        {/* Banner */}
        <section
          className='h-96 bg-cover bg-center w-full md:h-[30rem] xl:h-[40rem]  rounded'
          // style={{ backgroundImage: `url(${dejapp})` }}
        ></section>

        {/* Skills & Link */}
        <section className='flex flex-col items-center gap-y-10 lg:gap-y-20 w-10/12'>
          <h1 className='text-2xl lg:text-3xl text-left font-head font-bold relative'>
            Golden Key <span className='underline w-full'></span>
          </h1>
          <div className='flex flex-col justify-around gap-y-8 lg:w-10/12'>
            <article className='article bg-white flex justify-between rounded-xl border border-lightBlue p-4 drop-shadow-lg w-full'>
              <h2 className='text-gray lg:text-xl font-head font-bold w-1/3'>
                Skills:
              </h2>
              <div className='flex flex-wrap items-start gap-y-2 text-gray w-full'>
                <p className='flex w-1/2'>
                  <img src={node} className='w-6 aspect-square mr-2' />
                  Node.js
                </p>
                <p className='flex w-1/2'>
                  <img src={express} className='w-6 aspect-square mr-2' />
                  Express
                </p>
                <p className='flex w-1/2'>
                  <img src={mysql} className='w-6 aspect-square mr-2' />
                  MySql
                </p>
                <p className='flex w-1/2'>
                  <img src={css} className='w-6 aspect-square mr-2' />
                  CSS
                </p>
                <p className='flex w-1/2'>
                  <img src={tailwind} className='w-6 aspect-square mr-2' />
                  Tailwind
                </p>
                <p className='flex w-1/2'>
                  <img src={html} className='w-6 aspect-square mr-2' />
                  HTML
                </p>
                <p className='flex w-1/2'>
                  <img src={react} className='w-6 aspect-square mr-2' />
                  React
                </p>
              </div>
            </article>
            <article className='article bg-white flex items-start rounded-xl border border-lightBlue p-4 drop-shadow-lg'>
              <h2 className='text-gray lg:text-xl font-head font-bold w-1/3'>
                Team:{' '}
              </h2>
              <div className='flex flex-col gap-y-2 w-full text-gray'>
                <p>
                  Yooran Kim<span> (Developer)</span>
                </p>
                <p>
                  Eunsong Choi<span> (UXUI Designer)</span>
                </p>
              </div>
            </article>
            <article className='article bg-white flex items-center rounded-xl border border-lightBlue p-4 drop-shadow-lg'>
              <h2 className='text-gray text-xl font-head font-bold w-1/3'>
                Link:{' '}
              </h2>
              <div className='flex justify-between w-full'>
                <a
                  href='https://github.com/yoo-ran/goldenkey'
                  target='_blank'
                  className='text-gray hover:text-black w-1/2'
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className='text-blue text-xl xl:text-2xl md:w-8'
                  />
                  Github
                </a>
              </div>
            </article>
          </div>
        </section>
      </div>

      {/* Project Contents */}
      <section className='flex flex-col gap-y-20 w-11/12 md:w-8/12 xl:w-6/12'>
        <div id='about'>
          <Narrative
            id='about'
            title={'About'}
            content={
              'This project is a full-stack CRUD application built with React.js, Node.js, and MySQL for a real estate business. It enables the business owner to upload, manage, and filter properties, facilitating better communication with customers and organization of listings.'
            }
          />
        </div>
        <div id='brainstorming'>
          <Narrative
            title={'Brainstorming'}
            content={
              'There are five key features in this project designed to enhance the client experience.'
            }
          />
          <ol className='list-decimal md:text-lg mt-8 ml-8'>
            <li>Login / Logout</li>
            <li>Upload Property</li>
            <li>Excel Upload</li>
            <li>Property Detail</li>
            <li>Search / Filter</li>
          </ol>
        </div>

        <div id='develop' className='flex flex-col gap-y-8'>
          <Narrative title={'Development'}></Narrative>
          <div className='flex flex-col gap-y-8'>
            <div className='flex flex-col gap-y-6'>
              <DevNarr
                title={'Login / Logout'}
                content={
                  'Implemented JWT-based authentication to secure access. Only business owner can access the upload and import Excel pages. Upon successful login, business owner are redirected to the upload page, ensuring restricted access to authorized users.'
                }
              ></DevNarr>

              <div className='flex flex-col justify-center lg:flex-row gap-y-6'>
                <div className='w-full aspect-square lg:w-1/2'>
                  <iframe
                    className='w-full h-full'
                    src='//youtube.com/embed/oCOiHgCG6tw'
                    title='YouTube Video'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div>
                <ol className='list-decimal font-head font-bold lg:text-lg mb-10'>
                  <li>Login</li>
                </ol>
                <div className='w-full'>
                  <ol className='list-disc flex flex-col gap-y-3'>
                    <li>
                      <p className='font-head font-bold'>
                        User enters credentials
                      </p>
                      <p>Email & password are managed via React's useState.</p>
                    </li>
                    <li>
                      <p className='font-head font-bold'>
                        API request with JWT authentication
                      </p>
                      <p>
                        Credentials are sent to the backend using axios.post().
                      </p>
                    </li>
                    <li>
                      <p className='font-head font-bold'>Response Handling</p>
                      <p>
                        <span className='font-head font-bold'>
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className='text-lime-500 text-xl mr-1'
                          />
                          Success&nbsp;:&nbsp;
                        </span>
                        Login confirmation alert → Redirects to /upload →
                        Updates authentication state.
                      </p>
                      <p>
                        <span className='font-head font-bold'>
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            className='text-red text-xl mr-1'
                          />
                          Failure&nbsp;:&nbsp;
                        </span>
                        Displays an error message, preventing unauthorized
                        access.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
              <div className='flex sm:flex-col lg:flex-row gap-x-8 w-full'>
                <div className='overflow-hidden lg:w-1/2'>
                  <p>Client side</p>
                  <ChildCode
                    code={`
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { email, pw } = formData;
    const response = await axios.post(
      '$ {apiUrl}/login',
      { email, pw },
      { withCredentials: true }
    );

    if (response.status === 200) {
      alert('로그인이 성공적으로 완료되었습니다!');
      navigate( /
  upload);
      setError(false);
      setIsAuthenticated(true);
    } else {
      setError(true);
      setIsAuthenticated(false);
    }
  } catch (error) {
    console.error(
      'Error during login:',
      error.response ? error.response.data : error.message
    );
    setError(true);
    setIsAuthenticated(false);
  }
};`}
                  />
                </div>
                <div className='overflow-hidden lg:w-1/2'>
                  <p>Server side</p>
                  <ChildCode
                    code={`
if (match) {
  // If the password matches, create a JWT token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      fname: user.fname,
      lname: user.lname,
    },
    jwtSecret,
    { expiresIn: '1h' }
  );

  // Set the JWT token in an HTTP-only cookie
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'Strict',
    maxAge: 3600000, // 1 hour
  });

  // Send the user data back to the client (without the password)
  const { password, ...userWithoutPassword } = user;
  return res
    .status(200)
    .json({ user: userWithoutPassword, message: 'Login successful' });
} else {
  // If the password is incorrect
  return res.status(401).send('Invalid credentials');
}`}
                  />
                </div>
              </div>
            </div>

            <div>
              <DevNarr
                title={'Upload property'}
                content={
                  'The Property Upload feature is designed for business owners to efficiently manage their property listings. It includes:'
                }
              />
              <ul className='list-disc font-head font-bold'>
                <li>Saving Property Details</li>
                <li>Auto-Generating Addresses</li>
                <li>Uploading Property Images</li>
              </ul>
              <div className='w-full aspect-square lg:w-1/2'>
                <iframe
                  className='w-full h-full'
                  src='//youtube.com/embed/2NY9xY6h01s'
                  title='YouTube Video'
                  allow='accelerometer; clipboard-write; encrypted-media; gyroscope; '
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <div>
                  <ol className='list-decimal font-head font-bold lg:text-lg mb-10'>
                    <li>Saving Property Details</li>
                  </ol>
                  <div className='w-full'>
                    <ol className='list-disc flex flex-col gap-y-3'>
                      <li>
                        <p className='font-head font-bold'>
                          Backend & Database Update
                        </p>
                        <p>
                          Set up the backend to match MySQL database changes,
                          ensuring smooth data handling.
                        </p>
                      </li>
                      <li>
                        <p className='font-head font-bold'>
                          Saving Property Details
                        </p>
                        <p>
                          Stores property information in MySQL using INSERT
                          queries with proper validation.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className='overflow-hidden lg:w-1/2'>
                  <p>Client side</p>
                  <ChildCode
                    code={`
const savePropertyPromise = axios.post(
  $ {apiUrl}/properties/update,
  formattedFieldsToUpdate
);`}
                  />
                </div>
                <div className='overflow-hidden lg:w-1/2'>
                  <p>Server side</p>
                  <ChildCode
                    code={`
app.post('/properties/update', (req, res) => {
  const propertyData = req.body;

  db.query(
    'INSERT INTO property SET ? ',
    [propertyData, propertyData],
    (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).send('Error saving property data');
      }
      res.send('Property data saved successfully');
    }
  );
});`}
                  />
                </div>
              </div>
              <div>
                <ol className='list-decimal font-head font-bold lg:text-lg mb-10'>
                  <li>Auto-Generating Addresses</li>
                </ol>
                <div className='w-full'>
                  <ol className='list-decimal flex flex-col gap-y-3'>
                    <li>
                      <p className='font-head font-bold'>
                        Convert Address Data to JSON
                      </p>
                      <p>
                        Collected all city addresses in Korea and formatted them
                        into JSON for structured storage.
                      </p>
                    </li>
                    <li>
                      <p className='font-head font-bold'>
                        Import the JSON Data into MySQL
                      </p>
                      <p>
                        Stored addresses data in MySQL, setting up foreign key
                        relationships to link old and new addresses.
                      </p>
                    </li>
                    <li>
                      <p className='font-head font-bold'>
                        Implement Address Autocomplete
                      </p>
                      <p>
                        Built a search feature using LIKE, LIMIT, and JOIN SQL
                        queries to fetch matching addresses dynamically.
                      </p>
                    </li>
                    <li>
                      <p className='font-head font-bold'>
                        Auto-Fill on Selection
                      </p>
                      <p>
                        Created an auto-list for old and new addresses that
                        fills in data when a user selects an address.
                      </p>
                    </li>
                  </ol>
                </div>
                <div className='overflow-hidden lg:w-1/2'>
                  <p>Client side</p>
                  <ChildCode
                    code={`
const handleNewAddressSearch = async (e) => {
  const searchText = e.target.value;
  setNewAddress(searchText); // Update local state for new address input
  if (searchText.length > 0) {
    try {
      const response = await axios.get(
        $ {apiUrl}/addresses?searchText=$ {searchText}
      );
      setNewAddressSuggestions(response.data); // Set suggestions for new address
    } catch (error) {
      console.error('Error fetching new address suggestions:', error);
    }
  } else {
    setNewAddressSuggestions([]); // Clear suggestions when input is less than 3 characters
  }
};`}
                  />
                </div>
                <div className='overflow-hidden lg:w-1/2'>
                  <p>Server side</p>
                  <ChildCode
                    code={`
app.get('/addresses', async (req, res) => {
  const { searchText } = req.query;
  const query = 
    SELECT 
        new_address.시군구 AS new_district, 
        ...

        old_address.시군구 AS old_district,
        ...

    FROM 
        new_address
    JOIN 
        old_address ON new_address.건물관리번호 = old_address.건물관리번호
    WHERE 
        new_address.시군구 LIKE ? OR 
        ...
    ;

  // Execute the query, applying the searchText for partial matching
  db.query(
    query,
    [
      %$ {searchText}%, // new_address.시구군
      ...
    ],
    (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database query failed' });
      }

      // Send the results back as JSON
      res.json(results);
    }
  );
});`}
                  />
                </div>
              </div>
              <div>
                <ol className='list-decimal font-head font-bold lg:text-lg mb-10'>
                  <li>Property Image Upload</li>
                </ol>
                <div className='w-full'>
                  <ol className='list-decimal flex flex-col gap-y-3'>
                    <li>
                      <p className='font-head font-bold'>
                        Multer for Image Upload
                      </p>
                      <p>
                        Set up Multer on the server to handle image uploads.
                      </p>
                    </li>
                    <li>
                      <p className='font-head font-bold'>
                        Save Image Paths in MySQL
                      </p>
                      <p>
                        Store file paths in the database, linking them to
                        properties.
                      </p>
                    </li>
                    <li>
                      <p className='font-head font-bold'>
                        Retrieve & Display Images
                      </p>
                      <p>
                        Fetch image paths via API and render them on the
                        website.
                      </p>
                    </li>
                  </ol>
                </div>
                <div className='overflow-hidden lg:w-1/2'>
                  <p>Client side</p>
                  <ChildCode
                    code={`
const formData = new FormData();
selectedFiles.forEach((file) => formData.append('images', file));

try {
  const response = await axios.post($ {apiUrl}/upload-images, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    withCredentials: true,
});`}
                  />
                </div>
                <div className='overflow-hidden lg:w-1/2'>
                  <p>Server side</p>
                  <ChildCode
                    code={`
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath); // Create the uploads folder if it doesn't exist
    }
    cb(null, uploadPath); // Specify the folder to store uploaded files
  },
  filename: (req, file, cb) => {
    // Use the original filename for the file, keeping the extension
    cb(null, $ {Date.now()}-$ {file.originalname});
  },
});

const upload = multer({
  storage, 
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
  },
  fileFilter: (req, file, cb) => {
    // Accept only certain file types (jpeg, jpg, png)
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images are allowed')); // Return an error if file type is invalid
    }
  },
});`}
                  />
                </div>
              </div>
              <div>
                <ol className='list-decimal font-head font-bold lg:text-lg mb-10'>
                  <li>Property Image Upload</li>
                </ol>
                <div className='w-full'>
                  <ol className='list-decimal flex flex-col gap-y-3'>
                    <li>
                      <p className='font-head font-bold'>
                        Multer for Image Upload
                      </p>
                      <p>
                        Set up Multer on the server to handle image uploads.
                      </p>
                    </li>
                    <li>
                      <p className='font-head font-bold'>
                        Save Image Paths in MySQL
                      </p>
                      <p>
                        Store file paths in the database, linking them to
                        properties.
                      </p>
                    </li>
                    <li>
                      <p className='font-head font-bold'>
                        Retrieve & Display Images
                      </p>
                      <p>
                        Fetch image paths via API and render them on the
                        website.
                      </p>
                    </li>
                  </ol>
                </div>
                <div className='overflow-hidden lg:w-1/2'>
                  <p>Client side</p>
                  <ChildCode code={``} />
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-y-8'>
              <DevNarr
                title={'Excel Upload'}
                content={
                  'This feature allows business owners to upload property data via Excel, automatically saving it to the database and synchronizing it with the website.'
                }
              />
              <div className='w-full'>
                <ol className='list-decimal flex flex-col gap-y-3'>
                  <li>
                    <p className='font-head font-bold'>
                      Excel Upload & AG Grid Integration
                    </p>
                    <p>
                      Used AG Grid to display property data in an Excel-style
                      format for easy management.
                    </p>
                  </li>
                  <li>
                    <p className='font-head font-bold'>
                      Database Synchronization
                    </p>
                    <p>
                      When an Excel file is uploaded, the system compares its
                      data with the existing database.
                    </p>
                    <ol>
                      <li>
                        <p className='font-head font-bold'>
                          {' '}
                          <FontAwesomeIcon
                            icon={faCircle}
                            className='text-lime-500 mr-2'
                          />
                          New Data:{' '}
                          <span className='font-normal'>
                            Added to the database.
                          </span>
                        </p>
                      </li>
                      <li>
                        <p className='font-head font-bold'>
                          <FontAwesomeIcon
                            icon={faCircle}
                            className='text-yellow-500 mr-2'
                          />
                          Existing Data:{' '}
                          <span className='font-normal'>
                            Compared for changes, prompting the user to confirm
                            or cancel overwriting.
                          </span>
                          <ol className='list-decimal'>
                            <li>
                              <p className='font-head font-bold'>
                                Conflict Detection & Alert System
                              </p>
                              <p>
                                Created an alert component to handle Excel
                                upload conflicts, ensuring business owners can
                                review and approve changes before saving.
                              </p>
                            </li>
                            <li>
                              <p className='font-head font-bold'>
                                Property Deletion Option
                              </p>
                              <p>
                                Added the ability to delete properties from the
                                database, allowing business owners to keep their
                                listings up-to-date.
                              </p>
                            </li>
                          </ol>
                        </p>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <div className='flex flex-col gap-y-6 xl:gap-y-36'>
                <div className='flex flex-col gap-y-6'>
                  <div className='flex flex-col md:flex-row justify-between items-center gap-y-8'>
                    <div className='md:w-1/2'>
                      <ol className='flex flex-col gap-y-4'>
                        <li>
                          {' '}
                          <h3 className='font-head font-bold lg:text-lg xl:text-2xl '>
                            2. Detail Screen
                          </h3>
                        </li>
                        <li className='lg:text-lg xl:text-xl'>Detail Screen</li>
                        <li className='lg:text-lg'>
                          When a user clicks on a property item, they are taken
                          to the detail page with the property ID passed as a
                          parameter. The detail screen then retrieves the
                          specific property data using this ID from the API. The
                          fetched data is subsequently sent to the detail
                          component, which is shown on the detail screen.
                        </li>
                      </ol>
                    </div>
                  </div>
                  <ChildCode
                    code={`
// This hook fetches data for a specific item based on detailId and handles loading and error states.
  // The hook depends on detailId, meaning it will re-run whenever detailId changes.
  useEffect(() => {
    if (detailId) {
      axios.get("https://dejapi-8cfa29bb41d9.herokuapp.com/api/items/" + detailId)
        .then(
          (result) => {
            setIsLoaded(true);
            setDataResult(result.data);
            // Sets the loading state to true and updates the state with the fetched data (result.data).
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    } else {
      // Handle case where detailId is not provided
      setIsLoaded(true);
      setError(new Error('Not any Item has been selected:)'));
    }
  }, [detailId]);

  return (
    <View style={styles.container}>
      {/* Renders the UI based on the current states (error, isLoaded, dataResult, and navigation).
        displayData Function: Called with the current states to decide what to display. */}
      {displayData(error, isLoaded, dataResult, navigation)}
    </View>
  );
}

function displayData(error, isLoaded, dataResult, ) {

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
    ...
  else {
    return (
        // Renders the DetailComponent with the fetched data (dataResult) and navigation functionality.
        <DetailComponent currProperty={dataResult} navigatorRef={navigation} />
    );
  }
}

`}
                  />
                </div>
                <div className='flex flex-col gap-y-6'>
                  <div className='flex flex-col md:flex-row justify-between items-center gap-y-8'>
                    <img
                      src={likepage}
                      alt='likepage'
                      className='w-1/3 lg:w-1/3 lg:h-1/2 xl:w-1/4'
                    />
                    <div className='md:w-1/2'>
                      <ol className='flex flex-col gap-y-4'>
                        <li>
                          {' '}
                          <h3 className='font-head font-bold lg:text-lg xl:text-2xl '>
                            3. Like Screen
                          </h3>
                        </li>
                        <li className='lg:text-lg  xl:text-xl'>Like Screen</li>
                        <li className='lg:text-lg'>
                          The Like.js component manages and displays a list of
                          saved items using AsyncStorage for persistent storage.
                          It fetches saved items on component mount with
                          fetchItems, which updates the state with items
                          retrieved from storage. The component includes
                          functionality to remove items with deleteItem,
                          updating both AsyncStorage and the component’s state.
                          Additionally, HeartBtn.js checks if a specific item is
                          already saved and updates the isLiked state
                          accordingly, ensuring the UI reflects whether the item
                          is liked.
                        </li>
                      </ol>
                    </div>
                  </div>
                  <ChildCode
                    code={`
// Like.js
// Retrieves the saved items from AsyncStorage when the component mounts.
  const fetchItems = async () => {
    try {
      const existingItems = await AsyncStorage.getItem('items');
      if (existingItems) {
        setSavedItems(JSON.parse(existingItems));
      }
    } catch (error) {
      Alert.alert('Error fetching items');
    }
  };

  // Calls fetchItems when the component mounts (empty dependency array [] ensures it runs once).
  useEffect(() => {
    fetchItems();
  }, []);

  // Removes an item with a specific itemId from AsyncStorage and updates the state.
  const deleteItem = async (itemId) => {
    try {
      // Retrieves the saved items from AsyncStorage. AsyncStorage.getItem
      const existingItems = await AsyncStorage.getItem('items');
      if (existingItems) {
        // Converts the stringified JSON data into a JavaScript array using JSON.parse.
        const itemsArray = JSON.parse(existingItems);
        // Creates a new array updatedItems that excludes the item with the specified itemId.
        const updatedItems = itemsArray.filter(item => item.id !== itemId);
        // Stores the updated array of items back into AsyncStorage. 
        await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
        // Updates the component’s state with the new array of items.
        setSavedItems(updatedItems); 
      }
    } catch (error) {
      Alert.alert('Error deleting item');
    }
  };

  // Renders each item using SaleCardItem, passing the item data, navigation, a flag (isLike), and the deleteItem function.
  const renderItem = ({ item }) => (
    <SaleCardItem properties={item} navigatorRef={navigation} isLike={true} onDelete={deleteItem} />
  );
  `}
                  />
                  <ChildCode
                    code={`
// Heart Button.js
// Asynchronously checks if the current item (specified by property.id) exists in AsyncStorage.
  const checkIfItemExists = useCallback(async () => {
    try {
      const existingItems = await AsyncStorage.getItem('items');
      const itemsArray = existingItems ? JSON.parse(existingItems) : [];
      // Checks if the current item is in the array using some().
      const itemExists = itemsArray.some(item => item.id === property.id);
      // Updates the isLiked state based on whether the item exists.
      setIsLiked(itemExists);
    } catch (error) {
      Alert.alert('Error fetching items');
    }
  }, [property.id]);

  //  Executes the checkIfItemExists function when the component mounts or when checkIfItemExists changes. 
  useEffect(() => {
    checkIfItemExists();
  }, [checkIfItemExists]);

  // Asynchronously saves or removes the current item from AsyncStorage based on the isLiked state.
  const saveItem = async () => {
    try {
      const existingItems = await AsyncStorage.getItem('items');
      const itemsArray = existingItems ? JSON.parse(existingItems) : [];

      if (isLiked) {
        // Remove item if it already exists
        const updatedItems = itemsArray.filter(item => item.id !== property.id);
        await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
        setSavedItems(updatedItems);
        setIsLiked(false);
        Alert.alert('Item removed!');
      } else {
        // Add item if it does not exist
        itemsArray.push(property);
        await AsyncStorage.setItem('items', JSON.stringify(itemsArray));
        setSavedItems(itemsArray);
        setIsLiked(true);
        Alert.alert('Item saved!');
      }
    } catch (error) {
      Alert.alert('Error updating item');
    }
  };
`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='takeaway' className='flex flex-col gap-y-8'>
          <Narrative title={'Take away'} />
          <div>
            <h3 className='lg:text-lg font-head font-bold'>
              API Implementation and Deployment:
            </h3>
            <p>
              Developed a custom API to manage property data by creating a JSON
              file and connecting it via Node.js, and then deploying it on
              Heroku for live access.
            </p>
          </div>
          <div>
            <h3 className='lg:text-lg font-head font-bold'>
              Data Management and Display:
            </h3>
            <p>
              Filtering and Display: Used functions to filter properties based
              on their sale status and dynamically update the UI based on user
              interactions, ensuring relevant items are displayed.
            </p>
            <p>
              Detail Fetching: Designed a detail screen that fetches and
              displays property details based on a passed property ID.
            </p>
          </div>
          <div>
            <h3 className='lg:text-lg font-head font-bold'>
              Component Development:
            </h3>
            <p>
              Implemented a component to manage and display saved items using
              AsyncStorage. Included functionality for fetching, deleting, and
              dynamically updating the list of liked properties.
            </p>
            <p>
              Integrated a function to determine if an item is already saved and
              update the UI accordingly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Goldenkey;
