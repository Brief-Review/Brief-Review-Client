import { useState, useEffect } from "react";
import { assetsService } from "../services/assetsServices/asset.service";

export function useAssets() {
  const [resourceData, setResourceData] = useState([]);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const { data } = await assetsService.index();
      setResourceData(data.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return resourceData;
}
