import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faSquareGithub, faJs, faCss3Alt, faReact, faNodeJs, faGithub} from '@fortawesome/free-brands-svg-icons';

import Narrative from '../../prjContents/Narrative';
import DevNarr from '../../prjContents/DevNarr';
import SEO from '../../components/Seo';
import PrjMenu from '../../components/PrjMenu';
import ChildCode from '../highlights/multistep/ChildCode';

import dejapp from "../../images/dejapp/dejapp.png"
import api from "../../images/skills/api.png"
import react from "../../images/skills/react.png"
import node from "../../images/skills/node.png"
import css from "../../images/skills/css.png"
import html from "../../images/skills/html.png"
import chatgpt01 from "../../images/dejapp/chatgpt_prompt01.png"
import chatgpt02 from "../../images/dejapp/chatgpt_prompt02.png"
import homepage01 from "../../images/dejapp/homepage01.jpg"
import homepage02 from "../../images/dejapp/homepage02.jpg"
import detailpage from "../../images/dejapp/detailpage.jpg"
import likepage from "../../images/dejapp/likepage.jpg"

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function DejApp() {

    const [page, setPage]= useState("")

    const newPage = (newP) =>{
        setPage(newP)
    }

    useEffect(()=>{
        if (page!="") {
            let section = document.getElementById(page)
            section.scrollIntoView({behavior: "smooth", block: "start"})
        }
    },[page])

  return (
    <main className='flex flex-col gap-y-20  mb-40 pt-28 md:pt-0 '>
        <PrjMenu newPage={newPage} page={page}  />

        <SEO
            title='Real Estate App by Yooran Kim'
            description="Explore the Real Estate App project by Yooran Kim, a frontend developer focused on creating intuitive and user-friendly web applications. This project highlights Yooran's expertise in developing a comprehensive real estate platform that allows users to browse properties, view detailed listings, and save their favorite properties. Learn about the technologies used, including React, Node.js, and MySQL, to build a dynamic and responsive app that enhances the property search experience."
            name='Yooran Kim'
            type='website'
            keywords="frontend developer, web developer, real estate app, property listings, React, Node.js, MySQL"
            url="https://yoorankim.com/dejapp"
        />

        {/* <PrjMenu/> */}
        <div className='flex flex-col md:flex-row items-center w-full gap-y-14 md:mt-10 md:w-8/12'>
            {/* Banner */}
            <section className="h-96 bg-cover bg-center w-10/12 md:h-[30rem] rounded" style={{ backgroundImage: `url(${dejapp})` }}></section>

            {/* Skills & Link */}
            <section className='flex flex-col items-center gap-y-10 lg:gap-y-20 w-10/12 '>
                <h1 className='text-2xl lg:text-3xl text-left font-head font-bold relative'>DEJ APP <span className='underline w-full'></span></h1>
                <div className="flex flex-col justify-around gap-y-8 lg:w-3/4">
                    <article className='bg-white flex justify-between rounded-xl border border-lightBlue p-4 drop-shadow-lg w-full'>
                        <h2 className='text-gray lg:text-xl font-head font-bold w-1/3'>Skills:</h2>
                        <div className='flex flex-wrap items-start gap-y-2 text-gray'>
                            <p className='flex w-1/2'><img src={api} className='w-6 aspect-square mr-2'/>API</p>
                            <p className='flex w-1/2'><img src={css} className='w-6 aspect-square mr-2'/>CSS</p>
                            <p className='flex w-1/2'><img src={node} className='w-6 aspect-square mr-2'/>Node.js</p>
                            <p className='flex w-1/2'><img src={html} className='w-6 aspect-square mr-2'/>HTML</p>
                            <p className='flex w-1/2'><img src={react} className='w-6 aspect-square mr-2'/>React Native</p>
                        </div>
                    </article>
                    <article className='bg-white flex items-start  rounded-xl border border-lightBlue p-4 drop-shadow-lg'>
                        <h2 className='text-gray lg:text-xl font-head font-bold w-1/3'>Team: </h2>
                        <div className='flex flex-col gap-y-2 w-full text-gray'>
                            <p>Yooran Kim<span> (Developer)</span></p>
                            <p>Kimia Ashrafi<span> (UXUI Designer)</span></p>
                        </div>
                    </article>
                    <article className='bg-white flex items-center rounded-xl border border-lightBlue p-4 drop-shadow-lg'>
                        <h2 className='text-gray text-xl font-head font-bold w-1/3'>Link: </h2>
                        <div className='flex justify-between w-full'>
                            <a href='https://github.com/yoo-ran/dejapp' target='_blank' className='text-gray hover:text-black w-1/2'>
                                <FontAwesomeIcon icon={faGithub} className='text-blue text-xl xl:text-2xl md:w-8' /> 
                                Github
                            </a>
                            <a href='#' target='_blank' className='text-gray hover:text-black w-1/2'>
                                <FontAwesomeIcon icon={faUpRightFromSquare} className='text-blue text-xl xl:text-2xl md:w-8' /> 
                                Website
                            </a>
                        </div>
                    </article>
                </div>
            </section>
        </div>


        {/* Project Contents */}
        <section className='flex flex-col gap-y-20 w-11/12 md:w-7/12 xl:w-6/12'>
            <div id='about'>
                <Narrative id="about" title={"About"} 
                content={"The DEJ app is a Real Estate platform that simplifies the property search process. Users can effortlessly browse through a variety of listings, access detailed property information, and save their favorite selections. With its seamless and intuitive interface, the app ensures a smooth search experience. Whether you're buying, renting, or exploring, DEJ offers a comprehensive and user-friendly solution, complete with advanced filtering options."}/>
            </div>
            <div id='brainstorming'>
                <Narrative title={"Brainstorming"} content={"First, select a reliable real estate API that offers comprehensive property data and supports your app's needs. Next, integrate this API into your app, ensuring smooth data fetching and accurate property details. Finally, develop the app based on the wireframe, incorporating features like property browsing and saving favorites for a seamless user experience."}/>
                <ol className='list-decimal md:text-lg mt-8 ml-8'>
                    <li>API Selection</li>
                    <li>API Integration</li>
                    <li>App Development</li>
                    <li>Refinement and Enhancement</li>
                </ol>
            </div>
            
            <div id='develop' className='flex flex-col gap-y-8'>
                <Narrative title={"Development"}></Narrative>
                    <div  className='flex flex-col gap-y-8'>
                        <div className='flex flex-col gap-y-6'>
                            <DevNarr 
                                title={"API Selection"} 
                                content={"Our team initially searched for a suitable free real estate API but couldn't find a good option. As a result, we decided to create our own API. The process involves three steps: "}>
                            </DevNarr>

                            <ol className='list-decimal font-head font-bold lg:text-lg mb-10 ml-8'>
                                <li>Creating a JSON file with the property data</li>
                                <li>Connecting the JSON file as an API using Node.js,</li>
                                <li>Deploying the API</li>
                            </ol>

                            <div className='flex flex-col md:flex-row gap-y-6'>
                                <div className='w-full md:w-1/2'>
                                    <h3 className='font-head font-bold lg:text-lg'>1. Creating a JSON file with the property data</h3>
                                    <p>
                                        Based on the wireframe, I identified the necessary properties for our app and used ChatGPT to generate the JSON file by specifying the exact requirements.
                                    </p>
                                </div>
                                <div className='border-2 border-blue rounded-lg overflow-hidden py-4'>
                                    <img src={chatgpt01} alt="ChatGPT Prompt01" />
                                    <img src={chatgpt02} alt="ChatGPT Prompt02" />
                                </div>
                            </div>
                            <div>
<ChildCode 
code={`
// properties.json

[
    {
      "id": 1,
      "name": "Luxury Villa",
      "price": 1200000,
      "amenity": {
        "bathroom": 3,
        "bedroom": 4,
        "sqft": 3500,
        "parking": 2
      },
      "description": "A beautiful luxury villa with modern amenities and spacious interiors.",
      "category": "villa",
      "address": "123 Villa Lane",
      "city": "Los Angeles",
      "img": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      "carousel": [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      "onsale": true
    },
    ...
]`}/>
                            </div>

                            <div className='flex flex-col gap-y-6'>
                                <div>
                                    <h3 className='font-head font-bold lg:text-lg'>2. Connecting the JSON file as an API using Node.js</h3>
                                    <p>
                                        To handle API requests, I developed server.js and api.js (API routes) using Node.js.
                                    </p>
                                </div>
                                <ol className='ml-8'>
                                    <li className='list-disc lg:text-lg'>Server.js</li>
                                    <li>
                                        I sets up an Express.js server that listens on a specified port. It uses middleware to handle CORS and parse JSON request bodies. The server routes API requests through the apiRoutes module.
                                    </li>
                                <ChildCode 
code={`
// server.js
const express = require('express');
// A web framework for Node.js that simplifies creating server-side applications.
const bodyParser = require('body-parser');
// Middleware for parsing incoming request bodies, allowing server to handle JSON data.
const cors = require('cors');
// Middleware for enabling Cross-Origin Resource Sharing (CORS), which allows server to handle requests from different origins.
const apiRoutes = require('./routes/api');
// Imports routing from a external file (./routes/api)

const app = express();
// Initializes an Express application instance.
const port = process.env.PORT || 3000;
// Sets the port number for the server. It uses an environment variable PORT if available; otherwise, it defaults to 3000.

app.use(cors());
// Applies the CORS middleware to the app, enabling cross-origin requests.
app.use(bodyParser.json());
// Applies the body-parser middleware to parse JSON-formatted request bodies.

app.use('/api', apiRoutes);
// Mounts the API routes defined in ./routes/api to the /api path. 
// This means that all routes defined in apiRoutes will be prefixed with /api.


app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
});
// Message to indicate that the server is running.`}/>
                                </ol>
                                <ol className='ml-8'>
                                    <li className='list-disc lg:text-lg'>Api.js</li>
                                    <li>
                                    `api.js` defines routes to handle various HTTP methods for performing GET operations on items stored in a JSON file. Each route executes the corresponding action and responds to the client. In the future, it can be expanded to support full CRUD operations.
                                    </li>
                                <ChildCode 
code={`
const express = require('express');
// The web framework for Node.js
const router = express.Router();
// An instance of the Express Router to handle routes.
const path = require('path');
// A Node.js module for handling and transforming file paths

// Load JSON data
// Constructs the path to the JSON file (properties.json) and loads its content into the items variable.
const dataFilePath = path.join(__dirname, '../properties.json');
let items = require(dataFilePath);


// GET all items
// Handles GET requests to /items. Responds with all items in JSON format.
router.get('/items', (req, res) => {
  res.json(items);
});

// GET a specific item by ID
// Handles GET requests to /items/:id. Finds and responds with the item matching the specified ID, or sends a 404 status if not found.
router.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(i => i.id === itemId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// Exports the configured router so it can be used in the main server file.
module.exports = router;`}/>
                                </ol>
                            </div>
                            <div className='flex flex-col gap-y-6'>
                                <div>
                                    <h3 className='font-head font-bold lg:text-lg'>3. Deploying the API</h3>
                                    <p>
                                        I deployed my API on <a 
                                        target='__blank'
                                        href="https://www.heroku.com/platform?utm_source=google&utm_medium=paid_search&utm_campaign=amer_heraw&utm_content=general-branded-search-rsa&utm_term=heroku&gad_source=1&gclid=Cj0KCQjwtsy1BhD7ARIsAHOi4xbvqzIzTWHRtj1Yuxc8RTCMtTzV-Gg2g__WG_W1YKyseAE4b41B91kaAm5zEALw_wcB"
                                        className='text-blue hover:text-gray'> Heroku</a>, making the API link live and ready for use in our DEJ app.
                                    </p>
                                </div>
                                <ol className='ml-8 flex flex-col gap-y-4 list-decimal'>
                                    <li>
                                        <span className='font-head font-bold'>Install Heroku CLI:</span> Install the command-line tools for Heroku.</li>
                                    <li><
                                        span className='font-head font-bold'>Login to Heroku:</span> Authenticate Heroku account via the CLI.</li>
                                    <li>
                                        <span className='font-head font-bold'>Initialize a Git Repository:</span> Initialize git in the project.
                                        <pre className='bg-[#f5f5f5] p-2 rounded mt-2'>
                                            <code className='font-mono text-sm'>git init 
                                            <br/>git add . 
                                            <br/>git commit -m "Initial commit"</code>
                                        </pre>
                                    </li>
                                    <li>
                                        <span className='font-head font-bold'>Create a Heroku App:</span> Set up a new app on Heroku.
                                        <pre className='bg-[#f5f5f5] p-2 rounded mt-2'>
                                            <code className='font-mono text-sm'>heroku create dejapp</code>
                                        </pre>
                                    </li>
                                    <li>
                                        <span className='font-head font-bold'>Deploy the App:</span> Push code to Heroku to deploy.
                                        <pre className='bg-[#f5f5f5] p-2 rounded mt-2'>
                                            <code className='font-mono text-sm'>git push heroku main</code>
                                        </pre>
                                    </li>
                                    <li>
                                        <span className='font-head font-bold'>API Link: </span> 
                                        <a 
                                        target='__blank'
                                        href="https://dejapi-8cfa29bb41d9.herokuapp.com/api/items"
                                        className='text-blue hover:text-gray hover:underline'
                                        >
                                            https://dejapi-8cfa29bb41d9.herokuapp.com/api/items
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>


                        <div>
                            <DevNarr 
                                title={"API Integration"} 
                                content={"I used axios to implement the API and managed the data fetching with useEffect."}/
                            >
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
  }, []);`}/>
                            
                        </div>

                        <div className='flex flex-col gap-y-8'>
                            <DevNarr 
                                title={"App Development"} 
                                content={"Based on the wireframe, I developed the DEJ app, implemented its functionalities, and optimized its components. The three main features include:"}
                            />
                            <ol className='ml-8 list-decimal font-head font-bold lg:text-lg'>
                                <li>Home Screen</li>
                                <li>Detail Screen</li>
                                <li>Like Screen</li>
                            </ol>

                            <div className='flex flex-col gap-y-6'>
                                <h3 className='font-head font-bold lg:text-lg'>1. Home Screen</h3>
                                <div className='flex justify-between items-center'>
                                    <img src={homepage01} alt="homepage01" className='w-1/3 lg:w-1/3 lg:h-1/2	' />
                                    <div className='w-1/2'>
                                        <ol className='list-disc'>
                                            <li className='lg:text-lg'>Search by Category</li>
                                            <li>I developed the filterPress function to filter the data array according to the provided type, update the state with the filtered results, and track the selected filter type for changing the filter button's style. This functionality enables dynamic item filtering based on user input and updates the UI accordingly.</li>
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
`}/>
                                <div className='flex justify-between items-center'>
                                    <img src={homepage02} alt="homepage02" className='w-1/3 lg:w-1/3 lg:h-1/2' />
                                    <div className='w-1/2'>
                                        <ol className='list-disc'>
                                            <li className='lg:text-lg'>On Sale</li>
                                            <li>In the API, there is a key named onSale that indicates whether a property is on sale (true) or not (false). To display only the properties that are currently on sale, you should filter the data to include only those with onSale set to true.</li>
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


`}/>
                            </div>


                            <div className='flex flex-col gap-y-6'>
                                <h3 className='font-head font-bold lg:text-lg'>2. Detail Screen</h3>
                                <div className='flex justify-between items-center'>
                                    <img src={detailpage} alt="detailpage" className='w-1/3 lg:w-1/3 lg:h-1/2' />
                                    <div className='w-1/2'>
                                        <ol className='list-disc'>
                                            <li className='lg:text-lg'>Detail Screen</li>
                                            <li>When a user clicks on a property item, they are taken to the detail page with the property ID passed as a parameter. The detail screen then retrieves the specific property data using this ID from the API. The fetched data is subsequently sent to the detail component, which is shown on the detail screen.</li>
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

`}/>
                            </div>
                            <div className='flex flex-col gap-y-6'>
                                <h3 className='font-head font-bold lg:text-lg'>3. Like Screen</h3>
                                <div className='flex justify-between items-center'>
                                    <img src={likepage} alt="likepage" className='w-1/3 lg:w-1/3 lg:h-1/2' />
                                    <div className='w-1/2'>
                                        <ol className='list-disc'>
                                            <li className='lg:text-lg'>Like Screen</li>
                                            <li>The Like.js component manages and displays a list of saved items using AsyncStorage for persistent storage. It fetches saved items on component mount with fetchItems, which updates the state with items retrieved from storage. The component includes functionality to remove items with deleteItem, updating both AsyncStorage and the component’s state. Additionally, HeartBtn.js checks if a specific item is already saved and updates the isLiked state accordingly, ensuring the UI reflects whether the item is liked.</li>
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
  `}/>
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
`}/>
                            </div>
                            


                        </div>
                    </div>
            </div>

            <div id='takeaway' className='flex flex-col gap-y-8'>
                <Narrative title={"Take away"}/>
                <div >
                    <h3 className='lg:text-lg font-head font-bold'>API Implementation and Deployment:</h3>
                    <p>
                        Developed a custom API to manage property data by creating a JSON file and connecting it via Node.js, and then deploying it on Heroku for live access.
                    </p>
                </div>
                <div>
                    <h3 className='lg:text-lg font-head font-bold'>Data Management and Display:</h3>
                    <p>
                        Filtering and Display: Used functions to filter properties based on their sale status and dynamically update the UI based on user interactions, ensuring relevant items are displayed.
                    </p>
                    <p>
                        Detail Fetching: Designed a detail screen that fetches and displays property details based on a passed property ID.
                    </p>
                </div>
                <div>
                    <h3 className='lg:text-lg font-head font-bold'>Component Development:</h3>
                    <p>
                        Implemented a component to manage and display saved items using AsyncStorage. Included functionality for fetching, deleting, and dynamically updating the list of liked properties.
                    </p>
                    <p>
                        Integrated a function to determine if an item is already saved and update the UI accordingly.                    
                    </p>
                </div>
            </div>
        </section>

    </main>
  )
}

export default DejApp