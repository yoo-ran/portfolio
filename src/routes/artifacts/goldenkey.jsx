import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faCircleCheck,
  faCircle,
  faDesktop,
  faWrench,
  faDatabase,
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
import goldenkey from '../../images/goldenkey.jpg';

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
          className=' bg-cover  bg-center aspect-video w-10/12 md:h-[30rem] xl:h-[40rem]  rounded drop-shadow-lg'
          style={{
            backgroundImage: `url(${goldenkey})`,
          }}
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
                <ol className='list-decimal flex flex-col gap-y-6'>
                  <li>
                    <p className='font-head font-bold'>
                      Excel Upload & AG Grid Integration
                    </p>
                    <p>
                      Used AG Grid to display property data in an Excel-style
                      format for easy management.
                    </p>
                    <div className='w-full aspect-square lg:w-1/2'>
                      <iframe
                        className='w-full h-full'
                        src='//youtube.com/embed/uWogRpcHPqI'
                        title='YouTube Video'
                        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; '
                        allowFullScreen
                      ></iframe>
                    </div>
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
                        </p>
                      </li>
                    </ol>
                    <div className='w-full aspect-square lg:w-1/2'>
                      <iframe
                        className='w-full h-full'
                        src='//youtube.com/embed/uWogRpcHPqI'
                        title='YouTube Video'
                        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; '
                        allowFullScreen
                      ></iframe>
                    </div>
                  </li>
                  <li>
                    <p className='font-head font-bold'>
                      Conflict Detection & Alert System
                    </p>
                    <p>
                      Created an alert component to handle Excel upload
                      conflicts, ensuring business owners can review and approve
                      changes before saving.
                    </p>
                  </li>
                  <li>
                    <p className='font-head font-bold'>
                      Property Deletion Option
                    </p>
                    <p>
                      Added the ability to delete properties from the database,
                      allowing business owners to keep their listings
                      up-to-date.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            <div className='flex flex-col gap-y-8'>
              <DevNarr
                title={'Property Detail'}
                content={
                  'Implemented dynamic property management features, allowing business owners to edit, delete, and manage properties seamlessly.'
                }
              />
              <div className='w-full aspect-square lg:w-1/2'>
                <iframe
                  className='w-full h-full'
                  src='//youtube.com/embed/6_3yzysPa3E'
                  title='YouTube Video'
                  allow='accelerometer; clipboard-write; encrypted-media; gyroscope; '
                  allowFullScreen
                ></iframe>
              </div>
              <div className='w-full'>
                <ol className='list-decimal flex flex-col gap-y-6'>
                  <li>
                    <p className='font-head font-bold'>
                      Display Property Details
                    </p>
                    <p>
                      Fetched and displayed property data from the database on
                      the list and detail pages.
                    </p>
                  </li>
                  <li>
                    <p className='font-head font-bold'>Property Edition</p>
                    <p>
                      Implemented an Edit button that toggles between view mode
                      and input fields, allowing users to update property
                      details.
                    </p>
                  </li>
                  <li>
                    <p className='font-head font-bold'>Real-Time Data Saving</p>
                    <p>
                      When the user clicks the save button after editing, the
                      changes are automatically saved to the database and
                      instantly updated on the website.
                    </p>
                  </li>
                  <li>
                    <p className='font-head font-bold'>Property Deletion</p>
                    <p>
                      Added a Delete button to remove properties from the
                      database, ensuring business owners can manage listings
                      effectively while keeping the database synchronized.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            <div className='flex flex-col gap-y-8'>
              <DevNarr
                title={'Search / Filter'}
                content={
                  'Implemented a dynamic search and filtering system to enhance property browsing.'
                }
              />
              <div className='w-full'>
                <ol className='list-decimal flex flex-col gap-y-6'>
                  <li>
                    <p className='font-head font-bold'>Search</p>
                    <p>
                      Users can search by building name or address, with the
                      system fetching matching old and new addresses from the
                      database.
                    </p>
                    <iframe
                      className='w-full aspect-square'
                      src='//youtube.com/embed/YHwr3I-KOjU'
                      title='YouTube Video'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </li>
                  <li>
                    <p className='font-head font-bold'>Filter</p>
                    <p>
                      Added filters for residence type, parking, bathrooms, and
                      approval date, passing user-selected criteria to the
                      property listing page, ensuring real-time property
                      filtering.
                    </p>
                    <iframe
                      className='w-full aspect-square'
                      src='//youtube.com/embed/feEBMU2NjNA'
                      title='YouTube Video'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div id='takeaway' className='flex flex-col gap-y-8'>
          <Narrative title={'Take away'} />
          <div>
            <h3 className='text-lg font-head font-bold'>
              <FontAwesomeIcon icon={faDesktop} /> Frontend (React.js)
            </h3>
            <ol className='flex flex-col gap-y-2 list-disc ml-10'>
              <li>
                <p className='font-head font-bold'>Dynamic UI with AG Grid</p>
                <p>
                  Enables an Excel-style property manager for intuitive data
                  handling.
                </p>
              </li>
              <li>
                <p className='font-head font-bold'>State Management</p>
                <p>
                  Used <strong className='font-head'>React hooks</strong>{' '}
                  (useState, useEffect) to manage property data, filters, and UI
                  interactions.
                </p>
              </li>
              <li>
                <p className='font-head font-bold'>Optimized Performance</p>
                <p>
                  Used <strong className='font-head'>memoization</strong>
                  (useMemo, useCallback) to improve search and filtering
                  performance.
                </p>
              </li>
            </ol>
          </div>
          <div className='flex flex-col gap-y-2'>
            <h3 className='text-lg font-head font-bold'>
              <FontAwesomeIcon icon={faWrench} /> Backend (Node.js, Express.js)
            </h3>
            <ol className='flex flex-col gap-y-2 list-disc ml-10'>
              <li>
                <p className='font-head font-bold'>
                  API call for Property Management
                </p>
                <p>
                  Handles <strong className='font-head'>CRUD operations</strong>{' '}
                  for property listings.
                </p>
              </li>
              <li>
                <p className='font-head font-bold'>
                  Excel & Image Upload Handling
                </p>
                <p>
                  Uses <strong className='font-head'>Multer</strong> for images
                  and processes Excel files for bulk property uploads.
                </p>
              </li>
              <li>
                <p className='font-head font-bold'>
                  Authentication & Authorization
                </p>
                <p>
                  Implemented{' '}
                  <strong className='font-head'>JWT-based login</strong> to
                  secure access to property management pages.
                </p>
              </li>
            </ol>
          </div>
          <div>
            <h3 className='text-lg font-head font-bold'>
              <FontAwesomeIcon icon={faDatabase} /> Database (MySQL)
            </h3>
            <ol className='flex flex-col gap-y-2 list-disc ml-10'>
              <li>
                <p className='font-head font-bold'>Optimized Search Queries</p>
                <p>
                  Uses{' '}
                  <strong className='font-head'>LIKE, JOIN, and LIMIT</strong>{' '}
                  for efficient address and property name searching.
                </p>
              </li>
              <li>
                <p className='font-head font-bold'>
                  Auto-Synchronization with Excel Uploads
                </p>
                <p>
                  <strong className='font-head'>Compares and updates</strong>{' '}
                  property data when a new Excel file is uploaded.
                </p>
              </li>
              <li>
                <p className='font-head font-bold'>Real-Time Data Updates</p>
                <p>
                  Ensures changes{' '}
                  <strong className='font-head'>
                    instantly reflect on the website
                  </strong>{' '}
                  upon editing or deleting properties.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Goldenkey;
