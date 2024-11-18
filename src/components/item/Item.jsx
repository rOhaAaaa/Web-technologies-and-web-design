import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import foundationImage from '../../images/foundation.jpg';
import mascaraImage from '../../images/mascara.jpg';
import bronzerImage from '../../images/bronzer.jpg';
import blushImage from '../../images/blush.jpg';
import oilImage from '../../images/oil.jpg';
import glossImage from '../../images/gloss.jpg';
import highlighterImage from '../../images/highlighter.jpg';
import concealerImage from '../../images/concealer.jpg';
import creamImage from '../../images/cream.jpg';
import powderImage from '../../images/pudra.jpg';
import highlighter2Image from '../../images/highlighter2.jpg';
import mascara2Image from '../../images/mascara2.jpg';
import lipbalmImage from '../../images/lipbalm.jpg';
import perfumeImage from '../../images/perfume.jpg';
import perfume2Image from '../../images/perfume2.jpg';
import perfume3Image from '../../images/perfume3.jpg';
import perfume4Image from '../../images/perfume4.jpg';
import foundation2Image from '../../images/foundation2.jpg';
import lipstick2Image from '../../images/lipstick2.jpg';
import eyeshadowImage from '../../images/eyeshadow.jpg';
import './item.css';

const Item = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products] = useState([
    { id: 1, name: 'Foundation', description: 'A natural shade for a flawless skin tone that hydrates. This long-wearing foundation provides medium to full coverage, giving your skin a luminous finish. Enriched with moisturizing ingredients, it helps to keep your skin looking fresh and radiant throughout the day. Perfect for all skin types, it seamlessly blends into the skin for a beautiful, natural look.', price: 300, image: foundationImage },
    { id: 2, name: 'Mascara', description: 'Add volume and length to lashes for a dramatic look. This mascara features a specially designed brush that separates and coats each lash for maximum impact. Its smudge-proof and waterproof formula ensures long-lasting wear without flaking or clumping, making your eyes pop beautifully. Ideal for creating both everyday and glamorous looks.', price: 150, image: mascaraImage },
    { id: 3, name: 'Bronzer', description: 'Adds a natural glow to contour and highlight cheekbones. Infused with lightweight pigments, this bronzer glides on smoothly and blends effortlessly for a sun-kissed look. Its buildable formula allows you to achieve a natural or more intense bronze, perfect for all skin tones. Ideal for enhancing your features and adding warmth to your complexion.', price: 500, image: bronzerImage },
    { id: 4, name: 'Blush', description: 'A fresh blush that adds brightness and a healthy look to the face. This soft and silky powder applies effortlessly, delivering a natural flush to your cheeks. With a range of shades to choose from, this blush is designed to complement any skin tone, giving you that perfect pop of color. Perfect for a day-to-night transition, it provides long-lasting wear.', price: 100, image: blushImage },
    { id: 5, name: 'Lip oil', description: 'Moisturizes and nourishes the lips, leaving a light glowing effect. This lightweight formula hydrates and conditions your lips, providing a glossy finish without the sticky feel. With a blend of nourishing oils, this lip treatment keeps your lips soft and supple throughout the day. Available in a variety of shades, it can be worn alone or layered over lipstick for added shine.', price: 250, image: oilImage },
    { id: 6, name: 'Lip gloss', description: 'Lip gloss with a moisturizing effect that adds soft shine and care. This ultra-shiny gloss is infused with hydrating ingredients that keep your lips feeling soft and smooth. Its non-sticky formula glides on effortlessly and provides a luscious, glossy finish. Perfect for wearing alone or on top of your favorite lipstick for an extra touch of shine.', price: 200, image: glossImage },
    { id: 7, name: 'Highlighter', description: 'Adds a natural feel to the skin, enhancing the contours. This finely milled highlighter reflects light beautifully, giving your skin a radiant glow. Whether you apply it to the high points of your face or mix it with your foundation for an all-over luminosity, this versatile product is perfect for achieving that sought-after glow.', price: 350, image: highlighterImage },
    { id: 8, name: 'Concealer', description: 'Safely covers dark stains, stains, and imperfections in the skin. This creamy concealer offers full coverage that blends seamlessly into the skin, effectively covering blemishes, dark circles, and other imperfections. Its lightweight formula ensures a natural finish while providing long-lasting wear. Ideal for all skin types, it helps to create a flawless complexion.', price: 280, image: concealerImage },
    {
      id: 9,
      name: 'Cream',
      description: 'This nourishing face cream is designed to provide deep hydration, replenishing moisture levels and protecting the skin from environmental stressors. Its rich yet lightweight formula absorbs quickly, leaving the skin soft, smooth, and radiant throughout the day.',
      price: 345,
      image: creamImage,
    },
    {
      id: 10,
      name: 'Powder',
      description: 'A finely milled setting powder that helps control excess oil and shine, providing a soft matte finish that lasts for hours. Ideal for setting foundation or touch-ups throughout the day, it blurs imperfections and keeps makeup looking fresh.',
      price: 475,
      image: powderImage,
    },
    {
      id: 11,
      name: 'Highlighter',
      description: 'A luminous highlighter that adds a natural glow to your complexion. Infused with light-reflecting pigments, it enhances your facial features, creating a radiant, dewy look. Perfect for accentuating the cheekbones, brow bones, and cupid’s bow.',
      price: 500,
      image: highlighter2Image,
    },
    {
      id: 12,
      name: 'Mascara',
      description: 'This volumizing mascara instantly lifts, curls, and defines your lashes, delivering long-lasting volume and dramatic length. Its smudge-proof, buildable formula ensures that your lashes stay bold and full from morning to night.',
      price: 185,
      image: mascara2Image,
    },
    {
      id: 13,
      name: 'Lip balm',
      description: 'A hydrating lip balm that soothes and repairs dry, chapped lips. Enriched with nourishing ingredients, it provides lasting moisture while leaving a natural, healthy-looking shine. Ideal for daily use to keep lips soft and smooth.',
      price: 225,
      image: lipbalmImage,
    },
    {
      id: 14,
      name: 'Perfume',
      description: 'A sophisticated floral fragrance with delicate notes of jasmine, rose, and lily. This perfume is the epitome of elegance and femininity, perfect for daytime wear or special occasions where a touch of refinement is needed.',
      price: 1000,
      image: perfumeImage,
    },
    {
      id: 15,
      name: 'Perfume',
      description: 'A deep, sensual fragrance with warm, woody undertones and a hint of amber. This long-lasting scent evokes a sense of mystery and allure, making it ideal for evening events or intimate moments.',
      price: 1500,
      image: perfume2Image,
    },
    {
      id: 16,
      name: 'Perfume',
      description: 'A fresh, fruity perfume that blends vibrant citrus notes with soft floral accents. This refreshing fragrance is uplifting and energetic, ideal for those who enjoy a light, breezy scent for everyday wear.',
      price: 1850,
      image: perfume3Image,
    },
    {
      id: 17,
      name: 'Perfume',
      description: 'A rich and luxurious perfume that combines earthy wood tones with sweet vanilla and subtle spice. This captivating scent is perfect for those who want to make a lasting impression with a unique and memorable fragrance.',
      price: 2000,
      image: perfume4Image,
    },
    {
      id: 18,
      name: 'Foundation',
      description: 'A full-coverage foundation that evens out skin tone, covers imperfections, and provides a flawless finish without feeling heavy. Its long-wearing formula is perfect for all-day wear, leaving the skin looking smooth and natural.',
      price: 210,
      image: foundation2Image,
    },
    {
      id: 19,
      name: 'Lipstick',
      description: 'A creamy, highly-pigmented lipstick that delivers intense color with a single swipe. Its long-lasting formula keeps lips moisturized and vibrant throughout the day, offering a bold, polished look that doesnt fade.',
      price: 195,
      image: lipstick2Image,
    },
    {
      id: 20,
      name: 'Eyeshadow',
      description: 'A versatile eyeshadow palette featuring a range of highly pigmented shades that blend effortlessly. With a mix of matte, shimmer, and satin finishes, this palette allows you to create endless eye looks, from subtle daytime wear to bold, smoky eyes for the evening.',
      price: 95,
      image: eyeshadowImage,
    },
  ]);

  const item = products.find(product => product.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="item-page">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h1 className="item-title">{item.name}</h1>
        <p className="item-description">{item.description}</p>
        <p className="item-price">Price: ${item.price}</p>
        <div className="item-actions">
          <div className="field-group">
            <label htmlFor="countable-field" className="field-label">Countable field</label>
            <input type="number" min="1" defaultValue="1" id="countable-field" className="countable-field" />
          </div>
          <div className="field-group">
            <label htmlFor="selectable-field" className="field-label">Selectable Field</label>
            <select id="selectable-field" className="selectable-field">
              <option>Select</option>
            </select>
          </div>
        </div>
        <div className="item-buttons">
          <button className="back-button" onClick={() => navigate(-1)}>Go back</button> 
          <button className="add-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;