import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faCircleCheck,
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
                  'I used axios to implement the API and managed the data fetching with useEffect.'
                }
              />
              <div className='w-full aspect-square lg:w-1/2'>
                <iframe
                  className='w-full h-full'
                  src='//youtube.com/embed/2NY9xY6h01s'
                  title='YouTube Video'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <ChildCode
                code={`
useEffect(() => {
    // makes a GET request to the specified API endpoint to fetch items data.
    // a promise-based HTTP client for the browser and Node.js.
    axios.get('https://dejapi-8cfa29bb41d9.herokuapp.com/api/items')
    // This block runs when the request is successful.
      .then(response => {
        // Updates the state data with the response data
        setData(response.data);
        // Initializes filteredData with the same response data.
        setFilteredData(response.data);
        // Sets the loading state to true, indicating that the data has been loaded.
        setIsLoaded(true);s
      })

      // This block runs if the request fails.
      .catch(error => {
        // Sets the loading state to true, even if there is an error, to stop any loading indicators.
        setIsLoaded(true);
        // setError(error): Sets the error state with the encountered error.
        setError(error);
      });
      // With the empty dependency array [], this effect runs only once when the component mounts
  }, []);`}
              />
            </div>

            <div className='flex flex-col gap-y-8'>
              <DevNarr
                title={'App Development'}
                content={
                  'Based on the wireframe, I developed the DEJ app, implemented its functionalities, and optimized its components. The three main features include:'
                }
              />
              <ol className='ml-8 list-decimal font-head font-bold lg:text-lg'>
                <li>Home Screen</li>
                <li>Detail Screen</li>
                <li>Like Screen</li>
              </ol>

              <div className='flex flex-col gap-y-6 xl:gap-y-36'>
                <div className='flex flex-col gap-y-4'>
                  <div className='flex flex-col md:flex-row justify-between items-center gap-y-8'>
                    <img
                      src={homepage01}
                      alt='homepage01'
                      className='w-1/3 lg:w-1/3 lg:h-1/2	xl:w-1/4'
                    />
                    <div className='md:w-1/2'>
                      <ol className='flex flex-col gap-y-4'>
                        <li>
                          {' '}
                          <h3 className='font-head font-bold lg:text-lg xl:text-2xl '>
                            1. Home Screen
                          </h3>
                        </li>
                        <li className='lg:text-lg xl:text-xl'>
                          Search by Category
                        </li>
                        <li className='lg:text-lg'>
                          I developed the filterPress function to filter the
                          data array according to the provided type, update the
                          state with the filtered results, and track the
                          selected filter type for changing the filter button's
                          style. This functionality enables dynamic item
                          filtering based on user input and updates the UI
                          accordingly.
                        </li>
                      </ol>
                    </div>
                  </div>

                  <ChildCode
                    code={`
const filterPress = (type) => {
    let filtered = data.filter(item => item.category.toLowerCase().includes(type.toLowerCase()));
    // Converts the category property of the item to lowercase to make the comparison case-insensitive.
    // Checks if the lowercase category includes the lowercase type. If it does, the item is included in the filtered array.
    setFilteredData(filtered);
    // Updates the state filteredData with the filtered results from the data array.
    // This will typically cause a re-render of the component to display the filtered items.
    setIsClicked(type); 
    // Updates the state isClicked with the type that was passed to filterPress. 
    // This is used to keep track of which filter button was clicked, possibly for styling or other logic.
  }

  {filterBtn.map((btn, index) => (
    //  the map method to iterate over each element in the filterBtn array.
    <Button
    key={index}
    title={btn.type}
    icon={{
      name: btn.icon,
      type: 'ionicon',
      size: 15,
      color: isClicked === btn.type ? 'white' : '#00495F' // Change color based on state
    }}
    iconPosition='left'
    buttonStyle={{
      backgroundColor: isClicked === btn.type ? '#00495F' : 'white',// Change color based on state
    }}
    titleStyle={{
      color: isClicked === btn.type ? 'white' : '#00495F' // Change text color based on state
    }}    
    onPress={() => filterPress(btn.type)}
    // Sets up a click handler for the button that calls the filterPress function with the button's type when clicked.
  />
  ))}
`}
                  />
                </div>

                <div className='flex flex-col gap-y-4'>
                  <div className='flex flex-col md:flex-row justify-between items-center gap-y-8'>
                    <img
                      src={homepage02}
                      alt='homepage02'
                      className='w-1/3 lg:w-1/3 lg:h-1/2 xl:w-1/4'
                    />
                    <div className='md:w-1/2'>
                      <ol className='flex flex-col gap-y-4'>
                        <li>
                          {' '}
                          <h3 className='font-head font-bold lg:text-lg xl:text-2xl '>
                            1. Home Screen
                          </h3>
                        </li>
                        <li className='lg:text-lg  xl:text-xl'>On Sale</li>
                        <li className='lg:text-lg'>
                          In the API, there is a key named onSale that indicates
                          whether a property is on sale (true) or not (false).
                          To display only the properties that are currently on
                          sale, you should filter the data to include only those
                          with onSale set to true.
                        </li>
                      </ol>
                    </div>
                  </div>

                  <ChildCode
                    code={`
// This filters the response.data array to include only those items where the onsale property is true.
// saleItems will be an array containing only the items that are currently on sale.
const saleItems = response.data.filter(item => item.onsale === true);

// If there are on-sale items, it sets the state to only those items. 
// If there are no on-sale items, it sets the state to all items from the response.
if (saleItems.length > 0) {
  setSaleData(saleItems);
} else {
  setSaleData(response.data);
}

// This function defines how each item in the sale list should be rendered.
  const saleItem = ({ item }) => (
    <SaleCardItem properties={item} navigatorRef={navigation} isLike={false} />
  );

// This function manages the display of data based on the current state of the component.
  const displayDataContainer = (error, isLoaded, displayData, navigation, renderItem) => {
    // Error State:
    // Displays an error message if there was a problem fetching the data.
    if (error) {
      return (
        <View style={styles.messageContainer}>
          <Text>Error: {error.message}</Text>
        </View>
      );

    // Loading State:
    // Displays a loading message while data is being fetched.
    } else if (!isLoaded) {
      return (
        <View style={styles.messageContainer}>
          <Text>Loading...</Text>
        </View>
      );
    // No Results State:
    // Displays a message when no results are found in the filteredData.
    } else if (!filteredData.length) {
      return (
        <View style={styles.messageContainer}>
          <Text>No results found</Text>
        </View>
      );
    // Displaying Data:
    // Uses FlatList to render a scrollable list of items:
    } else {
      return (
          <FlatList
            data={displayData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.categoryList}
            contentContainerStyle={styles.categoryListContent}
            horizontal
          />
      );
    }
  };

  {displayDataContainer(error, isLoaded, saleData, navigation, saleItem)}


`}
                  />
                </div>

                <div className='flex flex-col gap-y-6'>
                  <div className='flex flex-col md:flex-row justify-between items-center gap-y-8'>
                    <img
                      src={detailpage}
                      alt='detailpage'
                      className='w-1/3 lg:w-1/3 lg:h-1/2 xl:w-1/4'
                    />
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
