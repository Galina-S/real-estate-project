import { useEffect, useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom';
import { db } from '../firebase';
import { toast } from "react-toastify";
import {collection, doc, updateDoc, where, query, orderBy, getDocs } from 'firebase/firestore';
import {FaHome} from "react-icons/fa"
import ListingItem from '../components/ListingItem';

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(true);
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState ({
    name: auth.currentUser.displayName,
    email:  auth.currentUser.email
  });

  const { name, email } = formData;

  function onLogout() {
    auth.signOut();
    navigate('/');

  }
  
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,

    }))
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //update Display Name in Firebase auth
        await updateProfile(auth.currentUser, {displayName: name,});
        //update Name in the Firestore
        const docRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Profile details updated")
    } catch (error) {
      toast.error("Could not update profile details")
    }
  }

  //fetch the data once the ProfilePage is loading
  //each time the userId (uid) will be changed, a new data is going to be fetched
  useEffect(()=> {
    async function fetchUserListings(){
      const listingRef = collection(db, "listings");
      //create a query
      const q = query(listingRef, where("userRef", "==", auth.currentUser.uid), orderBy("timestamp", "desc")); //new Listings at the top of the list (descending)
      //get the Documents
      const querySnap = await getDocs(q); //get Data from the database
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push( {
          id: doc.id,
          data: doc.data(),
        })
      })
      setListings(listings);
      setLoading(false);
    }
    fetchUserListings();
  }, [auth.currentUser.uid])

  return (
    <>
   <section className="font-serif max-w-6xl mx-auto flex justify-center items-center flex-col">
      <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
          {/*name input */}
          <input 
            type="text" 
            id="name" 
            value={name} 
            disabled = {!changeDetail} 
            onChange = {onChange}
            className={`w-full mb-6 px-4 py-2 text-xl text-gray-700 
          bg-red-50 border-gray-300 rounded transition ease-in-out  ${changeDetail && "bg-red-200 focus:bg-red-100"}`}/>

           {/*email input */}
           <input type="email" id="email" value={email} disabled className="w-full mb-6 px-4 py-2 text-xl text-gray-700 
          bg-red-50 border-gray-300 rounded transition ease-in-out"/>

          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
            <p className='flex items-center'>Do you want to change your name?
              <span onClick = { () => {
                  changeDetail && onSubmit()
                  setChangeDetail((prevState ) => !prevState)
              }}
               className='font-serif text-red-600
               hover:text-red-700 t transition ease-in-out duration-200 ml-1 cursor-pointer'>
               
               {changeDetail ? 'Apply change' : 'Edit'}
               </span>
            </p>
            <p onClick = { onLogout } className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>Sign out</p>
          </div>

        </form>
        <button type='submit' className='w-full bg-blue-600 text-white uppercase px-7 py-3 
        text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 
        ease-in-out hover:shadow-lg active:bg-blue-800'>
          <Link to="/create-listing" className='flex justify-center items-center '>
          <FaHome className='mr-2 text-3xl  rounded-full p-1 border-2'/>
          Sell or rent your home
          </Link>

        </button>
      </div>
    </section>
    <div className='max-w-6xl px-3 mt-6 mx-auto'>
       {!loading && listings.length > 0 && (
        <>
          <h2 className='text-2xl text-center font-semibold mb-6'>My Listings</h2>
          <ul className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            
            {listings.map ((listing) => (
              <ListingItem 
                key={listing.id} 
                id= {listing.id} 
                listing = {listing.data}
              />
            ))}
          </ul>
        </>
       )}
    </div>
    </>
  )
}

export default Profile