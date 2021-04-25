import { info } from "../data/info";
import { modelPortfolio } from "../data/modelPortfolio";

import { allocation } from "../data/allocation";
import { performance } from "../data/performance";
import { positions } from "../data/positions";
import { Allocation, Position } from "../data/models";
const yahooStockPrices = require("yahoo-stock-prices");

export async function spyResponse(): Promise<any> {
  return await yahooStockPrices.getCurrentPrice("AAPL");
}

function getRandomDelay() {
  // return 0;
  return 500 + Math.random() * 2000;
  // return 9999999999;
}

export function getModelPortfolio(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(modelPortfolio);
    }, getRandomDelay());
  });
}

export function getFundInfo(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(info);
    }, getRandomDelay());
  });
}

export function getFundAllocation(): Promise<Allocation[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allocation);
    }, getRandomDelay());
  });
}

export function getPerformance(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(performance);
    }, getRandomDelay());
  });
}

export function getPositions(): Promise<Position[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(positions);
    }, getRandomDelay());
  });
}
