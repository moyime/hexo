### Object.defineProperty----使Object数据变得“可观测”

### 依赖收集
#### 什么是依赖收集？
视图里谁用到了这个数据就更新谁，即谁用到了这个数据"称为"谁依赖了这个数据

我们给每个数据都建一个依赖数组(因为一个数据可能被多处使用)，谁依赖了这个数据(即谁用到了这个数据)我们就把谁放入这个依赖数组中，那么当这个数据发生变化的时候，我们就去它对应的依赖数组中，把每个依赖都通知一遍，告诉他们："你们依赖的数据变啦，你们该更新啦！"。这个过程就是依赖收集。
#### 什么时候收集依赖，什么时候通知依赖更新？
在getter中收集依赖，在setter中通知依赖更新

