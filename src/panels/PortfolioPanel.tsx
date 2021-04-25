import React, { useCallback, useEffect } from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

import { spyResponse } from "../services/dataService";
import { modelPortfolio } from "../data/modelPortfolio";

import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Grid, GridCellProps, GridColumn } from "@progress/kendo-react-grid";
interface test {
  currency: string;
  price: number;
}

export default function PortfolioPanel() {
  const defaultName = "select a portfolio..";
  const [portfolioName, setPortfolioName] = React.useState<String>(defaultName);
  const [spyPrice, setSpyPrice] = React.useState<any>();
  const fetchMyAPI = async () => {
    let data = await spyResponse();
    setSpyPrice(data);
  };

  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);

  const portfolioNames = Object.keys(modelPortfolio);

  let positions = modelPortfolio[portfolioName as keyof typeof modelPortfolio];

  return (
    <PanelBar>
      <PanelBarItem expanded={true} title="Select a model portfolio">
        <DropDownList
          className="drop-down-list"
          data={portfolioNames}
          defaultItem={defaultName}
          onChange={(event) => {
            setPortfolioName(event.value);
          }}
        />
        <Grid
          data={positions}
          style={{ opacity: defaultName == portfolioName ? "0" : "1" }}
        >
          <GridColumn title="Asset" field="Asset" locked={true} width={100} />
          <GridColumn title="Symbol" field="Symbol" />
          <GridColumn title="Percentage" field="Percentage" />
        </Grid>
        <div>{JSON.stringify(spyPrice)}</div>
      </PanelBarItem>
    </PanelBar>
  );
}
