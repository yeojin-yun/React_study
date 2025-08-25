import styled from "@emotion/styled/macro";
const StyledBackground = styled.div`
    background-color: hsl(0, 0%, 20%);
    padding: 20px;
`

const StyledFont = styled.p`
    font-size: 16px;
    color: white
`

function ProductInfo({ product }) {
    const { name, price, category } = product;

    return <StyledBackground>
    <StyledFont>상품명: {name}</StyledFont>
    <StyledFont>가격: {price}</StyledFont>
    <StyledFont>카테고리: {category}</StyledFont>
    </StyledBackground>

}
export default ProductInfo;