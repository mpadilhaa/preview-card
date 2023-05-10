import * as Styled from "./styles/styles";
import imgCard from "./assets/image-product-mobile.jpg";
import cartIcon from "./assets/icon-cart.svg";
function App() {
  return (
    <>
      <Styled.Container>
        <Styled.Card>
          <Styled.CardImg>
            <img src={imgCard} alt=""></img>
          </Styled.CardImg>

          <Styled.Content>
            <h5>Perfume</h5>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <span>
              $149.99 <h6>$169.99</h6>
            </span>
            <Styled.Button>
              <img src={cartIcon} alt="cart" />
              Add to cart
            </Styled.Button>
          </Styled.Content>
        </Styled.Card>
      </Styled.Container>
    </>
  );
}

export default App;
