const MIN_CIRCLE_LENGTH = 3;
const INITIAL_RANDOM_WALK_COUNT = 10;

/*
//Live demo: See how the algorithm works

const SHOW_EACH_CIRCLE = false; // Only set to true when using low INITIAL_RANDOM_WALK_COUNT or at last one sleep
const SLEEP_AFTER_CONNECTION_USE = 100; // in ms
const SLEEP_AFTER_CIRCLE_DETECTION = 1000; // in ms

// Network generation attributes
const NODE_COUNT = 20;
const MAX_CONNECTION_TRIES_PER_NODE = 160;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.06;
const INITIAL_NOISE = 100;
*/

// Live demo: big network

const SHOW_EACH_CIRCLE = false; // Only set to true when using low INITIAL_RANDOM_WALK_COUNT or at last one sleep
const SLEEP_AFTER_CONNECTION_USE = 0; // in ms
const SLEEP_AFTER_CIRCLE_DETECTION = 0; // in ms

// Network generation attributes
const NODE_COUNT = 500;
const MAX_CONNECTION_TRIES_PER_NODE = 180;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.07;
const INITIAL_NOISE = 30;

// Good looking sample networks
/*
const NODE_COUNT = 5000;
const MAX_CONNECTION_TRIES_PER_NODE = 160;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.06;
const INITIAL_NOISE = 20;
 */
/*
const NODE_COUNT = 2000;
const MAX_CONNECTION_TRIES_PER_NODE = 220;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.06;
const INITIAL_NOISE = 20;
 */
/*
const NODE_COUNT = 2000;
const MAX_CONNECTION_TRIES_PER_NODE = 200;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.06;
const INITIAL_NOISE = 20;
 */
/*
const NODE_COUNT = 2000;
const MAX_CONNECTION_TRIES_PER_NODE = 170;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.06;
const INITIAL_NOISE = 20;
 */
/*
const NODE_COUNT = 2000;
const MAX_CONNECTION_TRIES_PER_NODE = 150;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.06;
const INITIAL_NOISE = 20;
 */
/*
const NODE_COUNT = 2000;
const MAX_CONNECTION_TRIES_PER_NODE = 130;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.06;
const INITIAL_NOISE = 20;
 */
/*
const NODE_COUNT = 2000;
const MAX_CONNECTION_TRIES_PER_NODE = 110;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.06;
const INITIAL_NOISE = 20;
 */
/*
const NODE_COUNT = 1000;
const MAX_CONNECTION_TRIES_PER_NODE = 180;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.07;
const INITIAL_NOISE = 20;
 */
/*
const NODE_COUNT = 500;
const MAX_CONNECTION_TRIES_PER_NODE = 180;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.07;
const INITIAL_NOISE = 20;
 */
/*
const NODE_COUNT = 200;
const MAX_CONNECTION_TRIES_PER_NODE = 100;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.12;
const INITIAL_NOISE = 20;
 */
/*
const NODE_COUNT = 100;
const MAX_CONNECTION_TRIES_PER_NODE = 100;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.12;
const INITIAL_NOISE = 20;
 */
/*
const NODE_COUNT = 50;
const MAX_CONNECTION_TRIES_PER_NODE = 100;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.12;
const INITIAL_NOISE = 20;
 */



/*
const NODE_COUNT = 1000;
const MAX_CONNECTION_TRIES_PER_NODE = 180;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 6;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.05;
const INITIAL_NOISE = 100;
 */
/*
const NODE_COUNT = 500;
const MAX_CONNECTION_TRIES_PER_NODE = 180;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 8;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.05;
const INITIAL_NOISE = 100;
 */
/*
const NODE_COUNT = 200;
const MAX_CONNECTION_TRIES_PER_NODE = 180;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 12;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.05;
const INITIAL_NOISE = 100;
 */
/*
const NODE_COUNT = 100;
const MAX_CONNECTION_TRIES_PER_NODE = 180;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 20;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.05;
const INITIAL_NOISE = 100;
 */
/*
const NODE_COUNT = 50;
const MAX_CONNECTION_TRIES_PER_NODE = 50;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 100;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.1;
const INITIAL_NOISE = 100;
 */


/*
const NODE_COUNT = 1000;
const MAX_CONNECTION_TRIES_PER_NODE = 280;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 10;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.03;
const INITIAL_NOISE = 100;
 */
/*
const NODE_COUNT = 500;
const MAX_CONNECTION_TRIES_PER_NODE = 230;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 30;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.03;
const INITIAL_NOISE = 100;
 */
/*
const NODE_COUNT = 200;
const MAX_CONNECTION_TRIES_PER_NODE = 230;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 30;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.03;
 */
/*
const NODE_COUNT = 100;
const MAX_CONNECTION_TRIES_PER_NODE = 200;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 40;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.03;
const INITIAL_NOISE = 100;
 */
/*
const NODE_COUNT = 50;
const MAX_CONNECTION_TRIES_PER_NODE = 150;
const INITIAL_MAX_ALLOWED_NODE_DISTANCE = 30;
const INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE = 1.05;
const INITIAL_NOISE = 100;
 */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const distance = (nodeA, nodeB) => {
  return Math.sqrt(Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2));
};

const connectionHash = (nodeIndexA, nodeIndexB) => {
  return Math.min(nodeIndexA, nodeIndexB) * 100000 + Math.max(nodeIndexA, nodeIndexB)
};

let data = null;
let results = null;
let liveCanvas = null;
let ctx = null;
let connectionWeightCanvasCtx = null;
let xMax = 0;
let yMax = 0;

const nodes = []; // List<{x: Int, y: Int, index: Int}>
const connections = {}; // Map<pointIndex, List<pointIndex>> (Both directions)

const connectionCount = {}; // Map<ConnectionHash, Int>
let minConnectionCount = 0;
let maxConnectionCount = 0;
let connectionThreshold = 0.68;

let highlightedNodes = new Set(); // Set<pointIndex>
let highlightedConnections = new Set(); // Set<ConnectionHash>

const clearDrawings = () => {
  ctx.beginPath();
  ctx.clearRect(-1, -1, xMax + 1, yMax + 1);
};

const drawNodes = () => {
  const pointRadius = 5;
  nodes.forEach(node => {
    ctx.fillStyle = highlightedNodes.has(node.index) ? "#5e5" : "#777";
    ctx.beginPath();
    ctx.arc(node.x, node.y, pointRadius, 0, 2 * Math.PI);
    ctx.fill();
  });
};

const drawConnections = () => {
  nodes.forEach(startNode => {
    const connectionsForNode = connections[startNode.index];
    connectionsForNode.forEach(endNodeIndex => {
      if (startNode.index < endNodeIndex) { // Only draw each connection once (from lower node to higher node)

        // Highlight
        if (highlightedConnections.has(connectionHash(startNode.index, endNodeIndex))) {
          ctx.strokeStyle = "#d55";
          ctx.lineWidth = 2;
        } else {
          ctx.strokeStyle = "#ccc";
          ctx.lineWidth = 1;
        }

        // Draw connection
        const endNode = nodes[endNodeIndex];
        ctx.beginPath();
        ctx.moveTo(startNode.x, startNode.y);
        ctx.lineTo(endNode.x, endNode.y);
        ctx.stroke();
      }
    });
  });
};

const drawWeightCanvas = () => {
  // Calculate minConnectionCount
  minConnectionCount = Math.min(...Object.values(connectionCount));

  // Draw weightCanvas
  if (maxConnectionCount > 0) {
    connectionWeightCanvasCtx.beginPath();
    connectionWeightCanvasCtx.clearRect(-1, -1, xMax + 1, yMax + 1);

    const pointRadius = 5;
    nodes.forEach(node => {
      connectionWeightCanvasCtx.fillStyle = "#777";
      connectionWeightCanvasCtx.beginPath();
      connectionWeightCanvasCtx.arc(node.x, node.y, pointRadius, 0, 2 * Math.PI);
      connectionWeightCanvasCtx.fill();
    });
    nodes.forEach(startNode => {
      const connectionsForNode = connections[startNode.index];
      connectionsForNode.forEach(endNodeIndex => {
        if (startNode.index < endNodeIndex) { // Only draw each connection once (from lower node to higher node)
          const currentConnectionCount = connectionCount[connectionHash(startNode.index, endNodeIndex)];
          const relativeUse = (currentConnectionCount - minConnectionCount) / (maxConnectionCount - minConnectionCount);
          if (relativeUse >= 1 - connectionThreshold) {
            const hue = relativeUse * (230 - 60) + 60; // yellow -> green -> blue
            const lightness = (1 - relativeUse) * 60 + 20;
            connectionWeightCanvasCtx.strokeStyle = `hsl(${hue}, 100%, ${lightness}%)`;

            // Draw connection
            const endNode = nodes[endNodeIndex];
            connectionWeightCanvasCtx.beginPath();
            connectionWeightCanvasCtx.moveTo(startNode.x, startNode.y);
            connectionWeightCanvasCtx.lineTo(endNode.x, endNode.y);
            connectionWeightCanvasCtx.stroke();
          }
        }
      });
    });
  }
};

const redraw = () => {
  clearDrawings();
  drawConnections();
  drawNodes();

  drawWeightCanvas();
};

const randomWalk = async () => {
  // Just for visualization
  highlightedNodes = new Set();
  highlightedConnections = new Set();

  // For algo use
  const nodesInRandomWalk = [];

  let startNodeIndex = Math.floor(Math.random() * nodes.length);
  let isCycle = false;
  let tryCount = 0;
  while (isCycle === false) {
    const connectionsFromNode = connections[startNodeIndex];
    if (connectionsFromNode.length === 0) {
      data.innerText += "Can't run on not fully connected graph\n";
      throw "Can't run on not fully connected graph";
    }
    const targetNodeIndex = connectionsFromNode[Math.floor(Math.random() * connectionsFromNode.length)];

    // Add nodes and connections
    highlightedNodes.add(startNodeIndex);
    highlightedNodes.add(targetNodeIndex);
    nodesInRandomWalk.push(targetNodeIndex);
    highlightedConnections.add(connectionHash(startNodeIndex, targetNodeIndex));

    startNodeIndex = targetNodeIndex;

    tryCount++; // No endless loops
    if (tryCount > 1000) {
      data.innerText += "Endless loop\n";
      throw "Endless loop";
    }

    if (SLEEP_AFTER_CONNECTION_USE > 0) {
      await sleep(SLEEP_AFTER_CONNECTION_USE);
      redraw();
    }

    // Check for cycle
    let visitedNodes = [];
    for (let i = nodesInRandomWalk.length - 1; i >= 0; i--) {
      let node = nodesInRandomWalk[i];
      visitedNodes.push(node);

      const nodesInCircle = visitedNodes.slice(visitedNodes.indexOf(node));
      const uniqueNodesInCycle = new Set(nodesInCircle);
      if (uniqueNodesInCycle.size >= MIN_CIRCLE_LENGTH) {
        isCycle = true;
        highlightedNodes = uniqueNodesInCycle;

        // Add connections form circle to connectionCount
        let startNode = null;
        nodesInCircle.forEach(endNode => {
          if (startNode !== null) {
            maxConnectionCount = Math.max(maxConnectionCount, ++connectionCount[connectionHash(startNode, endNode)]);
          }
          startNode = endNode;
        });

        if (SHOW_EACH_CIRCLE) {
          redraw();
          let resultCanvas = document.createElement("canvas");
          resultCanvas.width = 1500;
          resultCanvas.height = 1500;
          resultCanvas.style.width = "400px";
          resultCanvas.style.height = "400px";
          let resultContext = resultCanvas.getContext('2d');
          resultContext.drawImage(liveCanvas, 0, 0);
          resultContext.font = "30px Arial";
          resultContext.textBaseline = "top";
          resultContext.fillText(uniqueNodesInCycle.size + " nodes: " + Array.from(uniqueNodesInCycle).join(" "), 0, 0);
          results.appendChild(resultCanvas);
        }

        if (SLEEP_AFTER_CIRCLE_DETECTION) {
          redraw();
          await sleep(SLEEP_AFTER_CIRCLE_DETECTION);
          highlightedConnections = new Set();
          highlightedNodes = new Set();
        }

        break; // Cycle already found, don't look for bigger cycle
      }
    }
    //data.innerText += visitedNodes.join(', ') + "\n";
  }
};

const findCommunities = async (count) => {
  const start = performance.now();
  // 1. Do random walk
  for (let i = 0; i < count; i++) {
    await randomWalk();
  }
  const end = performance.now();
  data.innerText += count + " iterations took " + Math.round(end - start) + "ms\n";
  redraw();
};

let initDone = false;
const init = () => {
  if (initDone) return;
  initDone = true;

  /*        Coordinate system

      (0, 0) ----------------------- (xMax, 0)
            |                       |
            |                       |
            |                       |
            |                       |
            |                       |
            |                       |
   (0, yMax) ----------------------- (xMax, yMax)

   */
  data = document.getElementById("data");
  results = document.getElementById("results");
  liveCanvas = document.getElementById("liveCanvas");
  connectionWeightCanvasCtx = document.getElementById("connectionWeightCanvas").getContext("2d");
  ctx = liveCanvas.getContext("2d");
  ctx.globalAlpha = 0.8;
  xMax = liveCanvas.width;
  yMax = liveCanvas.height;
  let noise = 0;

  // Generate network
  let initPoints = [
    {x: Math.floor(1 * xMax / 4), y: Math.floor(1 * yMax / 4)},
    {x: Math.floor(1 * xMax / 4), y: Math.floor(2 * yMax / 4)},
    {x: Math.floor(2 * xMax / 4), y: Math.floor(1 * yMax / 4)},
    {x: Math.floor(2 * xMax / 4), y: Math.floor(2 * yMax / 4)},
  ];

  initPoints.forEach(initPoint => {
    noise = INITIAL_NOISE; // Rest noise
    let prevNode = initPoint;
    for (let i = 0; i < NODE_COUNT / 4; i++) {
      const index = nodes.length;
      // Use Math.floor instead of Math.round, so network will grow to the upper left to generate more interesting structures
      const newNode = {
        index: index,
        x: (Math.floor(prevNode.x + (Math.random() - 0.5) * noise) + xMax) % xMax,
        y: (Math.floor(prevNode.y + (Math.random() - 0.5) * noise) + yMax) % yMax
      };
      noise += 30 / NODE_COUNT; // We want to have some dense connections and some connections that are more far away

      nodes.push(newNode);
      connections[index] = [];
      prevNode = newNode;
    }
  });

  // Generate connections
  let connectionCountSum = 0;
  nodes.forEach(startNode => {
    let maxDistance = INITIAL_MAX_ALLOWED_NODE_DISTANCE;
    let connectedNodes = 0;
    // Try random nodes to connect
    for (let i = 0; i < MAX_CONNECTION_TRIES_PER_NODE; i++) {
      const endNode = nodes[Math.floor(Math.random() * nodes.length)];
      // Take random near node, but make sure not to take the same node
      if (startNode.index !== endNode.index && distance(startNode, endNode) < maxDistance) {
        // Connect it, and make sure not to connect nodes twice
        if (connections[startNode.index].indexOf(endNode.index) === -1 &&
            connections[endNode.index].indexOf(startNode.index) === -1) {
          connections[startNode.index].push(endNode.index);
          connections[endNode.index].push(startNode.index);
          connectionCount[connectionHash(startNode.index, endNode.index)] = 0;
          connectedNodes++;
          connectionCountSum++;
        }
      } else if (connectedNodes <= 3 && i > MAX_CONNECTION_TRIES_PER_NODE / 2) {
        maxDistance *= INCREASE_FACTOR_MAX_ALLOWED_NODE_DISTANCE; // Increase probability of next match
      }

      // Make (almost) sure the graph is fully connected
      if (connectedNodes === 0) {
        // Connect to next or prev node (what is nearer)
        const prevNode = nodes[(startNode.index + 1) % NODE_COUNT];
        const nextNode = nodes[((startNode.index - 1) + NODE_COUNT) % NODE_COUNT];
        const endNode = distance(startNode, prevNode) < distance(startNode, nextNode) ? prevNode : nextNode;
        connections[startNode.index].push(endNode.index);
        connections[endNode.index].push(startNode.index);
        connectionCount[connectionHash(startNode.index, endNode.index)] = 0;
        connectedNodes++;
        connectionCountSum++;
      }
    }
  });
  data.innerText += NODE_COUNT + " nodes, " + connectionCountSum + " connections\n";

  redraw();

  // Run random walk after delay to let js render
  setTimeout(findCommunities, 100, INITIAL_RANDOM_WALK_COUNT);
};

const thresholdChange = () => {
  connectionThreshold = document.getElementById("thresholdSlider").value / 100;
  document.getElementById("thresholdLabel").innerText = Math.round(connectionThreshold * 100) + "% Threshold";
  redraw();
};

document.addEventListener('DOMContentLoaded', init, false);