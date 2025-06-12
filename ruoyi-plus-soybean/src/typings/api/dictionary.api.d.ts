/**
 * Namespace Api
 *
 * All backend api type
 */
declare namespace Api {
  /**
   * namespace Dictionary
   *
   * backend api module: "dictionary"
   */
  namespace Dictionary {
    /** cnports */
    type Cnports = Common.CommonRecord<{
      /** 口岸ID */
      portId: CommonType.IdType;
      /** 口岸代码 */
      portCode: string;
      /** 口岸名称 */
      portName: string;
      /** 口岸英文名称 */
      portNameEn?: string;
      /** 口岸类型 */
      portType: string;
      /** 所属海关 */
      customsCode?: string;
      /** 所属海关名称 */
      customsName?: string;
      /** 省份代码 */
      provinceCode?: string;
      /** 省份名称 */
      provinceName?: string;
      /** 城市代码 */
      cityCode?: string;
      /** 城市名称 */
      cityName?: string;
      /** 状态 */
      status: Common.EnableStatus;
      /** 排序 */
      sort?: number;
      /** 备注 */
      remark?: string;
    }>;

    /** cnports search params */
    type CnportsSearchParams = CommonType.RecordNullable<
      Pick<Cnports, 'portCode' | 'portName' | 'portType' | 'customsCode' | 'status'> & Api.Common.CommonSearchParams
    >;

    /** cnports list */
    type CnportsList = Api.Common.PaginatingQueryRecord<Cnports>;

    /** cnports operate params */
    type CnportsOperateParams = Pick<
      Cnports,
      | 'portCode'
      | 'portName'
      | 'portNameEn'
      | 'portType'
      | 'customsCode'
      | 'customsName'
      | 'provinceCode'
      | 'provinceName'
      | 'cityCode'
      | 'cityName'
      | 'status'
      | 'sort'
      | 'remark'
    > &
      Partial<Pick<Cnports, 'portId'>>;
  }
}
