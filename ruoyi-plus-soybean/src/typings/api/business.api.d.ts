/**
 * namespace Business
 *
 * backend api module: "Business"
 */
declare namespace Api {
  namespace Business {
    /** china ports */
    type ChinaPorts = Common.CommonRecord<{
      /** ID */
      id: CommonType.IdType;
      /** 出境口岸/国内口岸编码 */
      chinaPortCode: string;
      /** 出境口岸/国内口岸名称 */
      name: string;
      /** 出境口岸/国内口岸英文名称 */
      enname: string;
      /** 租户ID */
      tenantId: CommonType.IdType;
      /** 删除标记（0正常 1已删除） */
      delFlag: number;
    }>;

    /** china ports search params */
    type ChinaPortsSearchParams = CommonType.RecordNullable<
      Pick<Api.Business.ChinaPorts, 'chinaPortCode' | 'name' | 'enname'> & Api.Common.CommonSearchParams
    >;

    /** china ports operate params */
    type ChinaPortsOperateParams = CommonType.RecordNullable<
      Pick<
        Api.Business.ChinaPorts,
        | 'id'
        | 'chinaPortCode'
        | 'name'
        | 'enname'
        | 'tenantId'
        | 'createBy'
        | 'delFlag'
        | 'updateTime'
        | 'createTime'
        | 'updateBy'
      >
    >;

    /** china ports list */
    type ChinaPortsList = Api.Common.PaginatingQueryRecord<ChinaPorts>;
  }
}
