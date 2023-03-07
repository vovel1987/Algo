hanoi(4, 1, 3, 2);

function hanoi(n, stock1, stock3, stock2) {
  if (n === 1) {
    console.log(`  Move disc 1 from rod ${stock1} to rod ${stock3}`);
    return;
  }

  hanoi(n - 1, stock1, stock2, stock3);
  // console.log(`Move ${n} from rod${stock1} to rod ${stock3} with rod ${stock2}`);
  console.log(`Move disc ${n} from rod${stock1} to rod ${stock3} `);
  hanoi(n - 1, stock2, stock3, stock1);
}