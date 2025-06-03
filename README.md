# 智慧关务平台

<div align="center">
  <img src="https://foruda.gitee.com/images/1679673773341074847/178e8451_1766278.png" width="50%" height="50%">
  <p>基于 <a href="https://gitee.com/dromara/RuoYi-Vue-Plus" target="_blank">RuoYi-Vue-Plus</a> 的后端能力和 <a href="https://gitee.com/xlsea/ruoyi-plus-soybean" target="_blank">Soybean Admin</a> 前端特性构建的现代化智慧关务平台</p>
</div>

<div style="height: 10px; clear: both;"></div>

## 项目介绍

智慧关务平台是一套现代化、高效的关务管理系统，致力于简化和优化海关监管、通关和贸易流程。本平台采用前后端分离的架构，基于强大的 RuoYi-Vue-Plus 框架开发，为关务提供全方位的数字化解决方案。

### 平台定位

- **行业解决方案**：面向海关和进出口企业的专业化解决方案
- **降本增效工具**：通过数字化手段大幅提升通关效率，降低合规成本
- **风险管控平台**：结合大数据分析，实现智能风险识别与管控

### 目录结构

本项目包含以下主要组件：

- **RuoYi-Vue-Plus**: 后端服务，基于 Spring Boot 框架开发
- **ruoyi-plus-soybean**: 前端界面，基于 Vue3 和 Soybean Admin 框架开发

## 核心价值

- **提高通关效率**：通过智能化流程和数据处理，大幅减少货物通关时间
- **降低合规成本**：为进出口企业提供清晰的指引，降低合规成本和风险
- **数据智能分析**：运用大数据分析技术，实现风险精准识别和管控
- **业务全流程支持**：覆盖申报、查验、放行等关务业务全流程

## 主要功能模块

1. **通关管理**：在线申报、状态跟踪、单证管理
2. **风险管控**：智能风险评估、预警提示、合规指导
3. **数据分析**：通关数据统计、趋势分析、决策支持
4. **系统管理**：
   - 用户管理：用户的管理配置，分配用户所属部门、角色、岗位等
   - 部门管理：系统组织机构（公司、部门、小组）配置，树结构展现，支持数据权限
   - 菜单管理：配置系统菜单、操作权限、按钮权限标识等
   - 角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分
   - 租户管理：系统内租户的管理，租户套餐、过期时间、企业信息等
   - 字典管理：对系统中经常使用的一些固定数据进行维护
5. **监控管理**：
   - 操作日志：系统操作日志记录和查询
   - 登录日志：系统登录日志记录查询，包含登录异常情况
   - 在线用户：已登录系统的在线用户信息监控与强制踢出操作
   - 服务监控：监视系统 CPU、内存、磁盘、堆栈等服务器关键指标
   - 缓存监控：对系统缓存信息的查询，命令统计等
6. **工具管理**：
   - 代码生成：多数据源前后端代码的生成（java、html、xml、sql）
   - 系统接口：根据业务代码自动生成相关的 API 接口文档

## 技术特点

### 架构优势

- **分布式设计**：原生支持分布式集群部署，满足海量数据处理需求
- **多租户架构**：完整支持 SaaS 多租户模式，适合跨海关单位协同办公
- **插件化结构**：采用插件化+扩展包形式，结构解耦，易于扩展
- **高性能设计**：采用 Undertow 高性能容器，提供卓越的系统性能

### 技术栈

#### 前端技术

- 核心框架：Vue 3.5.x
- 开发语言：TypeScript 5.8.x
- 构建工具：Vite 6.2.x
- UI 组件库：Naive UI 2.41.x
- 状态管理：Pinia 3.0.x
- 路由：Vue Router 4.5.x
- HTTP 客户端：Axios/Alova
- CSS：UnoCSS
- 包管理器：pnpm 8.x+

#### 后端技术

- 核心框架：Spring Boot 3.4.x
- 安全框架：Sa-Token + JWT
- 数据操作：MyBatis-Plus
- Web 容器：Undertow
- 缓存数据库：Redis (Redisson 客户端)
- 数据库支持：MySQL、Oracle、PostgreSQL、SQLServer
- 分布式任务：SnailJob
- 文件存储：Minio/AWS S3
- 监控框架：SpringBoot-Admin

### 技术优势

- **高性能缓存**：使用 Redisson 客户端，支持 Redis 集群，提供分布式限流、分布式队列等高级特性
- **强大 ORM**：采用 MyBatis-Plus，简化 SQL 操作，提供多租户插件、分页插件等强大功能
- **数据安全**：支持数据脱敏、数据加解密、接口传输加密等多重安全保障
- **分布式能力**：内置分布式锁、分布式幂等、分布式任务调度等企业级功能
- **扩展灵活**：支持多数据源、异构数据库、动态数据源切换等高级特性

## 快速开始

### 环境要求

#### 后端环境

- JDK: 17/21
- 数据库: MySQL 5.7+, Oracle, PostgreSQL, SQLServer 等
- Redis: 5.0+
- Maven: 3.8+

#### 前端环境

- Node.js: >= 18.20.0
- pnpm: >= 8.7.0（强制使用 pnpm 构建）

### 安装步骤

1. **后端服务启动**

   ```bash
   # 克隆项目
   git clone [项目地址]

   # 进入后端目录
   cd smart-customs-platform/RuoYi-Vue-Plus

   # 修改数据库配置（application.yml）

   # 执行数据库脚本
   # script/sql目录下相应数据库类型的脚本

   # 编译项目
   mvn clean package -DskipTests

   # 运行主应用程序
   java -jar ruoyi-admin/target/ruoyi-admin.jar
   ```

2. **前端服务启动**

   ```bash
   # 进入前端目录
   cd smart-customs-platform/ruoyi-plus-soybean

   # 安装依赖
   pnpm install

   # 启动开发服务器
   pnpm dev

   # 构建生产版本
   pnpm build
   ```

## 代码生成与菜单更新

项目提供了代码生成工具和菜单 SQL 更新文件，在 `docs` 目录下：

- **代码生成工具**

  - 代码生成工具类位于 `docs/java` 目录
  - 代码生成模板位于 `docs/template` 目录
  - 在 ruoyi-generator 模块中使用 `soy` 模板生成对应前端代码

- **菜单 SQL 更新**
  - 菜单数据更新 SQL 文件位于 `docs/sql` 目录
  - 在系统初始化或更新时执行 SQL 文件来更新菜单数据

## 使用说明

系统提供了直观的操作界面，主要功能包括：

- **首页数据展示**：通过图表展示关键业务数据和趋势
- **业务操作功能**：包含通关申报、状态查询、风险监控等核心功能
- **系统管理功能**：包含用户管理、权限设置、系统配置等基础功能

### 常用命令

#### 前端常用命令

```bash
# 开发环境
pnpm dev

# 测试环境
pnpm dev:test

# 生产环境
pnpm dev:prod

# 构建生产版本
pnpm build

# 构建开发版本
pnpm build:dev

# 构建测试版本
pnpm build:test

# 预览构建
pnpm preview

# 类型检查
pnpm typecheck

# 代码规范检查并修复
pnpm lint
```

### 部署说明

支持多种部署方式：

1. **传统部署**：通过 jar 包直接部署
2. **Docker 部署**：提供完整的 Docker 编排配置
3. **Kubernetes 部署**：支持 K8s 容器编排

详细部署文档请参考：[RuoYi-Vue-Plus 部署文档](https://plus-doc.dromara.org/#/ruoyi-vue-plus/quickstart/deploy)

## 参考文档

- [RuoYi-Vue-Plus 官方文档](https://plus-doc.dromara.org)
- [Soybean Admin 官方文档](https://github.com/soybeanjs/soybean-admin)

## 技术支持

如有使用问题，请联系系统管理员获取帮助。

## 版权信息

本项目基于 RuoYi-Vue-Plus 框架开发，遵循 MIT 开源协议。
