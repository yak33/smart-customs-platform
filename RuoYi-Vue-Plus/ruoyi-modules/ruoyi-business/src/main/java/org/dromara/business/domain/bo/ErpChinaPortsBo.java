package org.dromara.business.domain.bo;

import org.dromara.business.domain.ErpChinaPorts;
import org.dromara.common.mybatis.core.domain.BaseEntity;
import org.dromara.common.core.validate.AddGroup;
import org.dromara.common.core.validate.EditGroup;
import io.github.linpeilie.annotations.AutoMapper;
import lombok.Data;
import lombok.EqualsAndHashCode;
import jakarta.validation.constraints.*;

/**
 * 口岸信息业务对象 erp_china_ports
 *
 * @author ZHANGCHAO
 * @date 2025-06-21
 */
@Data
@EqualsAndHashCode(callSuper = true)
@AutoMapper(target = ErpChinaPorts.class, reverseConvertGenerate = false)
public class ErpChinaPortsBo extends BaseEntity {

    /**
     * ID
     */
    @NotBlank(message = "ID不能为空", groups = { AddGroup.class, EditGroup.class })
    private String id;

    /**
     * 出境口岸/国内口岸编码
     */
    @NotBlank(message = "出境口岸/国内口岸编码不能为空", groups = { AddGroup.class, EditGroup.class })
    private String chinaPortCode;

    /**
     * 出境口岸/国内口岸名称
     */
    @NotBlank(message = "出境口岸/国内口岸名称不能为空", groups = { AddGroup.class, EditGroup.class })
    private String name;

    /**
     * 出境口岸/国内口岸英文名称
     */
    private String enname;

    /**
     * 删除标记（0正常 1已删除）
     */
    private Long delFlag;


}
