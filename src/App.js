import React, { useState } from "react";
import "./styles.css";

const fooddict = {
  Maharashtra:
    "Misal Pav- Misal pav is a type of street food in Maharashtra. Misal Pav is made using gram sprouts and this dish usually includes a spiced and tangy curry served with freshly chopped tomatoes, onions, and plenty of ‘farsan’ (fried savory combination) on top of pao (Maharashtrian flatbread) and lime juice.",
  Punjab:
    "Makki Di Roti & Sarson Da Saag- Makki Di Roti is a flatbread that has become a tradition among many households in the Punjab region. Makki Di Roti pairs exceptionally well with saag (mustard greens) and lassi!",
  "West Bengal":
    "Kosha Mangsho- A delicious Mutton Curry from Bengal, this dish is sure to be a favourite at your dinner. This recipe would absolutely satisfy your taste buds, as the meat cooks in a garlicky gravy with spices and mustard oil.",
  Gujarat:
    "Dhokla- Dhokla is a tangy dish that can be eaten for breakfast, as the main course, or served with chutneys as a snack. It is also vegetarian and usually made of rice or split chickpeas as the main ingredient.",
  Kashmir:
    "Rogan Josh/Ghosht- This highly aromatic recipe consisting of lamb pieces braised in a thick sauce flavoured with ginger and garlic, cardamom, cloves, bay leaves, and cinnamon is cooked slowly on low heat to bring out its rich flavour.",
  "Tamil Nadu":
    "Pongal- South Indians prepare it as a rice-and-lentil offering to the goddess during religious festivals. However, it’s typically a healthy food",
  Assam:
    "Papaya Khar- Khar is a wholly unique meal made of red rice, pounded pulses, raw papaya, and indigenous Assamese spices.",
  Bihar:
    "Litti Chowkha- made with wheat flour dough, spices, loaded with roasted flour, and lemon juice before being cooked and topped with chokha.",
  "Himachal Pradesh":
    "Dham- Dham is a curd-based meal made with rajma, moong dal, and rice.",
  "Andhra Pradesh":
    "Thukpa- Thukpa is made with boiling noodles that have been filtered and combined with veggies and meat.",
  Sikkim: "Momo- Momo is a South Asian dumpling paired with spicy sauces.",
  Karnataka:
    "Bisi Bele Bath- Bisi Bele Bath is a meal that combines sambar dal and rice with tamarind and spices.",
  Nagaland:
    "Pork with Bamboo Shoot- It is simply a meal made with dried bamboo shoots, chiles, and herbs. With boiling rice, this meal is wonderful.",
  Mizoram:
    "Misa Mach Poora- It is a marine food dish made with grilled shrimp that is enhanced by a splash of lemon.",
  Odisha:
    "Chenna Poda- Chhena Poda is an Indian cheese delicacy from the state of Odisha.",
  Chhatisgarh:
    "Chila- A chila is a chickpea flour crepe from North India and served with chutney or rolled-around fillings like Tofu Crumble",
  Jharkhand:
    "Dhooska- Dhooska, also known as Dushka, is a famous deep-fried delicacy enjoyed in Jharkhand.",
  "Uttar Pradesh":
    "Tunde Ke Kebabs-Tunde KeKebab, also referred to as 'Buffalo meat galouti kebab', is a famous chopped meat dish in Lucknow, India.",
  Telangana: "Biryani- This timeless masterpiece requires no explanation.",
  Goa:
    "Fish Curry- a spicy fish stew cooked with specific spices, served over steaming rice or roti.",
  Uttarakhand:
    "Kafuli- This quick and simple thick curry recipe calls for green chillies, spinach, ginger, garlic, fenugreek leaves, and spices.",
  "Madhya Pradesh":
    "Bhutte Ka Kees- a simple and tasty Indore dish. It's simple to make and tastes great.",
  Rajasthan:
    "Dal Baati Churma- a popular Rajasthani dish that combines spicy dal with sweet churma and deep-fried crispy bread."
};

var foodList = Object.keys(fooddict);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function ClickButton(States) {
    var meaning = fooddict[States];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <img
        className="imgFood"
        src="https://www.shutterstock.com/image-photo/buffet-table-scene-take-out-260nw-1745914352.jpg"
      ></img>
      <h1>Indian States Foods</h1>
      <h4>Checkout my favorite food. Select a genre to get started</h4>
      <h4>
        Indian States Foods that are delicious and give you insight into what
        each state is known for.
      </h4>
      {foodList.map(function (States) {
        return (
          <span>
            <button className="btnStyle" onClick={() => ClickButton(States)}>
              {States}
            </button>
          </span>
        );
      })}
      <hr style={{ backgroundColor: "black", paddingTop: "0.2rem" }} />
      <h3>{meaning}</h3>
    </div>
  );
}
