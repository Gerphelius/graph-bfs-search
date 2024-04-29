import { Injectable } from '@angular/core';

interface IVector2d {
  x: number;
  y: number;
}

@Injectable({
  providedIn: 'root',
})
export class GraphSearchService {
  private _neighbors = [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
  ];

  findArticulationPointsBfs(points: IVector2d[]) {
    const start = performance.now();
    const graph = new BfsGraph(points.length);

    points.forEach((point, index) => {
      const neighborsIndexes = [];

      for (let i = 0; i < 4; ++i) {
        const pointIndex = points.findIndex((el) =>
          this._comparePoint(this._addPoints(point, this._neighbors[i]), el)
        );

        pointIndex !== -1 && neighborsIndexes.push(pointIndex);
      }

      neighborsIndexes.forEach((el) => graph.addEdge(index, el));
    });

    // const graph = new BfsGraph(4);

    // graph.addEdge(0, 1);
    // graph.addEdge(0, 2);
    // graph.addEdge(1, 3);
    // graph.addEdge(2, 3);

    graph.bfs(3);

    console.log(`Done in: ${(performance.now() - start).toFixed(2)}ms`);
  }

  private _addPoints(a: IVector2d, b: IVector2d): IVector2d {
    return {
      x: a.x + b.x,
      y: a.y + b.y,
    };
  }

  private _comparePoint(a: IVector2d, b: IVector2d): boolean {
    return a.x === b.x && a.y === b.y;
  }
}

class BfsGraph {
  private _V: number = 0;
  private _adjList: number[][] = [];

  constructor(v: number) {
    this._V = v;
    this._adjList = new Array<number[]>(v);

    for (let i = 0; i < v; ++i) this._adjList[i] = [];
  }

  public addEdge(v: number, w: number) {
    this._adjList[v].push(w);
    this._adjList[w].push(v);
  }

  public bfs(s: number) {
    const visited = new Array<boolean>(this._V).fill(false);
    const queue: number[] = [];

    visited[s] = true;
    queue.push(s);

    while (queue.length > 0) {
      s = queue.shift();

      this._adjList[s].forEach((el) => {
        if (!visited[el]) {
          visited[el] = true;
          queue.push(el);
        }
      });
    }

    console.log(
      visited.findIndex((el) => !el) >= 0 ? 'Disconnected' : 'Connected'
    );
  }
}
