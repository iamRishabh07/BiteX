import React from 'react';
import ReactDOM from 'react-dom/client';
/*
 Header
  - Logo
  - Nav Items

 Body
  - Search
  - RestaurantContainer
  - RestaurantCards
    - Img
    - Name of Res, Rating, ETA, cusines, Delievery Time

Footer
 - Copyright
 - Links
 - Address
 - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          height="100px"
          width="300px"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf="
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
        height="100px"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: '661411',
      name: 'AL-Arabic Shawarma',
      cloudinaryImageId: 'b628e1f3e285b7f6d0a47df825d1babf',
      locality: "G M Reddy's Royale Apartments",
      areaName: 'Bellandur Sarjapur',
      costForTwo: '₹300 for two',
      cuisines: ['Arabian', 'Snacks', 'Beverages'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '661411',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 9000,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 9000,
      },
      parentId: '396951',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 7,
        serviceability: 'SERVICEABLE',
        slaString: '28 mins',
        lastMileTravelString: '7.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-06 07:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-1116eef9-9979-4d9f-9942-d68be2aeeb68',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/al-arabic-shawarma-g-m-reddys-royale-apartments-bellandur-sarjapur-bangalore-661411',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '291456',
      name: 'The Fritter Company',
      cloudinaryImageId: '3660c857274de528702f316b4a7a1996',
      locality: '2nd Stage',
      areaName: 'Btm Layout',
      costForTwo: '₹200 for two',
      cuisines: [
        'Burgers',
        'American',
        'Salads',
        'Snacks',
        'Desserts',
        'Fast Food',
        'Continental',
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '291456',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 7000,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 7000,
      },
      parentId: '21135',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '23 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-06 06:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'ABOVE ₹700',
        discountTag: 'FLAT DEAL',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-1116eef9-9979-4d9f-9942-d68be2aeeb68',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/the-fritter-company-2nd-stage-btm-layout-bangalore-291456',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '48581',
      name: 'Rotti Walla',
      cloudinaryImageId: 'kvlaq1ugkoozqr741zrv',
      locality: 'Appareddy Palya',
      areaName: 'Indiranagar',
      costForTwo: '₹200 for two',
      cuisines: [
        'North Indian',
        'Chinese',
        'Snacks',
        'Beverages',
        'Tandoor',
        'South Indian',
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: '48581',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 7000,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 7000,
      },
      parentId: '9541',
      avgRatingString: '4.0',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 5.8,
        serviceability: 'SERVICEABLE',
        slaString: '25 mins',
        lastMileTravelString: '5.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-06 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹100 OFF',
        subHeader: 'ABOVE ₹499',
        discountTag: 'FLAT DEAL',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-1116eef9-9979-4d9f-9942-d68be2aeeb68',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/rotti-walla-appareddy-palya-indiranagar-bangalore-48581',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '305684',
      name: 'Sri Sapana Dhaba',
      cloudinaryImageId: 'e67mqzpslp7ajxzdylpb',
      locality: '2nd Stage',
      areaName: 'Btm Layout',
      costForTwo: '₹400 for two',
      cuisines: ['Indian', 'Chinese'],
      avgRating: 3.1,
      feeDetails: {
        restaurantId: '305684',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 4400,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4400,
      },
      parentId: '194561',
      avgRatingString: '3.1',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.9,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '3.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-06 06:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        discountTag: 'FLAT DEAL',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-1116eef9-9979-4d9f-9942-d68be2aeeb68',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/sri-sapana-dhaba-2nd-stage-btm-layout-bangalore-305684',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '348811',
      name: 'The Cubano Sandwich Co.',
      cloudinaryImageId: 'gkm33nhcda7ahujr1wcp',
      locality: '6th Sector',
      areaName: 'HSR Layout',
      costForTwo: '₹300 for two',
      cuisines: ['American', 'Salads', 'Beverages', 'Continental', 'Mexican'],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: '348811',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4400,
      },
      parentId: '231098',
      avgRatingString: '4.4',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.9,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '3.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-12 00:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-1116eef9-9979-4d9f-9942-d68be2aeeb68',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/the-cubano-sandwich-co-6th-sector-hsr-layout-bangalore-348811',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '416272',
      name: 'Table for Tous',
      cloudinaryImageId: 'bxa51yskhvzq3k5ye7iq',
      locality: '4th Sector',
      areaName: 'HSR Layout',
      costForTwo: '₹600 for two',
      cuisines: ['Bakery', 'Desserts'],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: '416272',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5100,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5100,
      },
      parentId: '256670',
      avgRatingString: '4.6',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.9,
        serviceability: 'SERVICEABLE',
        slaString: '31 mins',
        lastMileTravelString: '3.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-06 06:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-1116eef9-9979-4d9f-9942-d68be2aeeb68',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/table-for-tous-4th-sector-hsr-layout-bangalore-416272',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '519477',
      name: 'Ghar Wali Khana',
      cloudinaryImageId: 'egu6jh5wkbhlrg5fga7g',
      locality: '2nd Stage',
      areaName: 'BTM Layout',
      costForTwo: '₹250 for two',
      cuisines: ['North Indian', 'Chinese', 'Snacks'],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: '519477',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4400,
      },
      parentId: '374396',
      avgRatingString: '3.9',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.8,
        serviceability: 'SERVICEABLE',
        slaString: '33 mins',
        lastMileTravelString: '3.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-06 08:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-1116eef9-9979-4d9f-9942-d68be2aeeb68',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/ghar-wali-khana-2nd-stage-btm-layout-bangalore-519477',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '387468',
      name: 'The Breakfast Nook',
      cloudinaryImageId: '3a26aa967dc44e104627a4b8a8117454',
      locality: '6th Sector',
      areaName: 'HSR Layout',
      costForTwo: '₹300 for two',
      cuisines: ['American', 'Continental', 'Healthy Food', 'Beverages'],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: '387468',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 4400,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4400,
      },
      parentId: '257216',
      avgRatingString: '4.4',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.9,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '3.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-12 00:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-1116eef9-9979-4d9f-9942-d68be2aeeb68',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/the-breakfast-nook-6th-sector-hsr-layout-bangalore-387468',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '56713',
      name: 'C. K. Mega Hot Food',
      cloudinaryImageId: 'slkxcjg7fezj9tzzspmh',
      locality: 'Mchs Colony',
      areaName: 'BTM Layout',
      costForTwo: '₹350 for two',
      cuisines: [
        'Chinese',
        'Pan-Asian',
        'Seafood',
        'Thai',
        'Oriental',
        'Fast Food',
        'Nepalese',
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '56713',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5200,
      },
      parentId: '21499',
      avgRatingString: '4.1',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 4,
        serviceability: 'SERVICEABLE',
        slaString: '22 mins',
        lastMileTravelString: '4.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-06 03:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-1116eef9-9979-4d9f-9942-d68be2aeeb68',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/c-k-mega-hot-food-mchs-colony-btm-layout-bangalore-56713',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
