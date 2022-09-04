# `@vantop/vantop-util`

## npm script

``` shell
#启动服务
npm run serve

#打包编译 
npm run build

#执行所有测试用例，该命令会生成所有测试用例覆盖率报告页面
npm run test 

#执行单个测试用例(输入测试用例文件名即可，无需输入后缀)，该命令只会在终端输出单个测试用例对应的覆盖率报告
npm run test ${yourfileName} 
```

### 测试用例报告参数解释

- Statement：语句覆盖率，所有语句的执行率
- Branch：分支覆盖率，所有代码分支如 if、三目运算的执行率
- Functions：函数覆盖率，所有函数被调用率
- Lines：行覆盖率，所有有效代码行的执行率，和语句类似
- Uncovered Lines：未覆盖行，所有未被覆盖的代码行

现阶段暂不强制要求测试用例报告指标达标，但是建议每个测试用例报告指标达标，以便更好的提高测试用例的质量。