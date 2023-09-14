import React, { useState, useEffect } from "react";
import { getProductDetail } from "../../services/getProductDetailService";
import { useParams } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import './style.css'
import ColumnsGrid from "./Grid";

const ProductDetails = () => {
    
  const [productDetail, setProductDetail] = useState({});
  const { id: productId } = useParams();


  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const data = await getProductDetail(productId);
        setProductDetail(data);
    } catch (error) {
        console.log("Error fetching products details  :", error);
    }
};

    fetchProductDetail();
  }, []);

  return (
    <div>
        <div className="go-back-detail">
          <GoBackButton/>
        </div>
        <ColumnsGrid productDetail={productDetail} />
    </div>
  );
};

export default ProductDetails;
