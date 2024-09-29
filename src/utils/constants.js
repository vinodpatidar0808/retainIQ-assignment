import { toast } from 'react-toastify';

// Initial table state
export const initialTableState = [{ tags: [], columns: [{}], selectedTags: { new: true } }];

// this will provide default row state when a new row is added, maxNumberOfColumns is the number of columns to add in the row
export const getDefaultRowState = (numberOfColums = 1) => {
  return {
    tags: [],
    columns: Array.from({ length: numberOfColums }, () => ({})),
    selectedTags: {},
  };
};

// this will provide suggesions for tags to add in the table
export const suggestedTags = ['sale', 'contains', 'new', 'discount', "men's", "woman's"];

// Can use to control max number of allowed rows and columns
// export const maxNumberOfRows = 10;
// export const maxNumberOfColumns = 10;

// This will trigger a notification to show toas message in <ToastContainer /> used inside app component
export const showToastMessage = (type, message) => {
  if (type === 'SUCCESS') {
    toast.success(message, {
      position: 'top-center',
      autoClose: 700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }
  // Add other types when needed
};

// sample data: for selecting designs
export const sampleData = [
  {
    id: '64f2db47b4aefa1d6bff5979', // MongoDB-style ObjectId
    url: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Woman in White T-Shirt',
  },
  {
    id: '64f2db47b4aefa1d6bff5980',
    url: 'https://burst.shopifycdn.com/photos/t-shirt-store.jpg?width=925&format=pjpg&exif=1&iptc=1',
    title: 'T-Shirt Store Display',
  },
  {
    id: '64f2db47b4aefa1d6bff5983',
    url: 'https://burst.shopifycdn.com/photos/rack-of-blank-tshirts.jpg?width=925&format=pjpg&exif=1&iptc=1',
    title: 'Rack of Blank T-Shirts',
  },
  {
    id: '64f2db47b4aefa1d6bff5984',
    url: 'https://images.pexels.com/photos/2983462/pexels-photo-2983462.jpeg?cs=srgb&dl=pexels-cottonbro-studio-2983462.jpg&fm=jpg',
    title: 'Close-up of Shoes',
  },
  {
    id: '64f2db47b4aefa1d6bff5987',
    url: 'https://burst.shopifycdn.com/photos/mens-tshirts.jpg?width=925&format=pjpg&exif=1&iptc=1',
    title: 'Men’s T-Shirts on Display',
  },
  {
    id: '64f2db47b4aefa1d6bff5988',
    url: 'https://images.pexels.com/photos/322088/pexels-photo-322088.jpeg?cs=srgb&dl=pexels-photo-322088.jpg&fm=jpg',
    title: 'Person in Black T-Shirt',
  },
  {
    id: '64f2db47b4aefa1d6bff5989',
    url: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?cs=srgb&dl=pexels-cottonbro-studio-2983464.jpg&fm=jpg',
    title: 'Man Holding Shopping Bag',
  },
  {
    id: '64f2db47b4aefa1d6bff5990',
    url: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Person Holding Black Jacket',
  },
  {
    id: '64f2db47b4aefa1d6bff5993',
    url: 'https://images.pexels.com/photos/2899675/pexels-photo-2899675.jpeg?cs=srgb&dl=pexels-photo-2899675.jpg&fm=jpg',
    title: 'Woman Holding Sunglasses',
  },
  {
    id: '64f2db47b4aefa1d6bff5994',
    url: 'https://images.pexels.com/photos/1024252/pexels-photo-1024252.jpeg?cs=srgb&dl=pexels-photo-1024252.jpg&fm=jpg',
    title: 'Stylish Winter Outfit',
  },
  {
    id: '64f2db47b4aefa1d6bff5995',
    url: 'https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?cs=srgb&dl=pexels-photo-1040427.jpg&fm=jpg',
    title: 'Minimalist Casual Clothing',
  },
  {
    id: '64f2db47b4aefa1d6bff5996',
    url: 'https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?cs=srgb&dl=pexels-photo-1124466.jpg&fm=jpg',
    title: 'Person Wearing Backpack',
  },
  {
    id: '64f2db47b4aefa1d6bff5997',
    url: 'https://images.pexels.com/photos/2899703/pexels-photo-2899703.jpeg?cs=srgb&dl=pexels-photo-2899703.jpg&fm=jpg',
    title: 'Denim Jacket and Jeans',
  },
  {
    id: '64f2db47b4aefa1d6bff5998',
    url: 'https://burst.shopifycdn.com/photos/fashion-model-in-pink.jpg?width=925&format=pjpg&exif=1&iptc=1',
    title: 'Fashion Model in Pink Dress',
  },
  {
    id: '64f2db47b4aefa1d6bff5999',
    url: 'https://images.pexels.com/photos/2983463/pexels-photo-2983463.jpeg?cs=srgb&dl=pexels-cottonbro-studio-2983463.jpg&fm=jpg',
    title: 'Person in Hoodie and Sweatpants',
  },
  {
    id: '64f2db47b4aefa1d6bff6003',
    url: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?cs=srgb&dl=pexels-photo-991509.jpg&fm=jpg',
    title: 'Woman Wearing Black Outfit',
  },
  {
    id: '64f2db47b4aefa1d6bff6004',
    url: 'https://images.pexels.com/photos/2983460/pexels-photo-2983460.jpeg?cs=srgb&dl=pexels-cottonbro-studio-2983460.jpg&fm=jpg',
    title: 'Woman in White Dress with Handbag',
  },
  {
    id: '64f2db47b4aefa1d6bff6005',
    url: 'https://images.pexels.com/photos/2899681/pexels-photo-2899681.jpeg?cs=srgb&dl=pexels-photo-2899681.jpg&fm=jpg',
    title: 'Man in Brown Leather Jacket',
  },
  {
    id: '64f2db47b4aefa1d6bff6006',
    url: 'https://images.pexels.com/photos/1111235/pexels-photo-1111235.jpeg?cs=srgb&dl=pexels-photo-1111235.jpg&fm=jpg',
    title: 'Woman in Grey Dress Shirt',
  },

  {
    id: '64f2db47b4aefa1d6bff6009',
    url: 'https://images.pexels.com/photos/3771831/pexels-photo-3771831.jpeg?cs=srgb&dl=pexels-photo-3771831.jpg&fm=jpg',
    title: 'Woman Wearing Yellow Jacket',
  },
  {
    id: '64f2db47b4aefa1d6bff6010',
    url: 'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?cs=srgb&dl=pexels-photo-179909.jpg&fm=jpg',
    title: 'Casual Street Style',
  },
  {
    id: '64f2db47b4aefa1d6bff6011',
    url: 'https://images.pexels.com/photos/1477473/pexels-photo-1477473.jpeg?cs=srgb&dl=pexels-photo-1477473.jpg&fm=jpg',
    title: 'Woman in Green Dress',
  },
  {
    id: '64f2db47b4aefa1d6bff6012',
    url: 'https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg?cs=srgb&dl=pexels-photo-2983467.jpg&fm=jpg',
    title: 'Man in Black Suit',
  },
];
