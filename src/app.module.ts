import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { join } from 'path';
import { AddressClient, AddressClientSchema } from './models/addressClient.model';
import { Adrmst, AdrmstSchema } from './models/adrmst.model';
import { Agepfi, AgepfiSchema } from './models/agepfi.model';
import { Aisle, AisleSchema } from './models/aisle.model';
import { AisleDckloc, AisleDcklocSchema } from './models/aisle_dckloc.model';
import { AllocSearchDtl, AllocSearchDtlSchema } from './models/alloc_search_dtl.model';
import { AllocSearchGrp, AllocSearchGrpSchema } from './models/alloc_search_grp.model';
import { AllocSearchHdr, AllocSearchHdrSchema } from './models/alloc_search_hdr.model';
import { AltPrtmst, AltPrtmstSchema } from './models/alt_prtmst.model';
import { ArcCmpShipment, ArcCmpShipmentSchema } from './models/arc_cmp_shipment.model';
import { ArcCmpDtl, ArcCmpDtlSchema } from './models/arc_cmpdtl.model';
import { ArcCmpHdr, ArcCmpHdrSchema } from './models/arc_cmphdr.model';
import { ArcCstmsCnsgnmnt, ArcCstmsCnsgnmntSchema } from './models/arc_cstms_cnsgnmnt.model';
import { ArePckFlg, ArePckFlgSchema } from './models/are_pck_flg.model';
import { AreaInvsts, AreaInvstsSchema } from './models/area_invsts.model';
import { AreMst, AreMstSchema } from './models/aremst.model';
import { AssetCarton, AssetCartonSchema } from './models/asset_carton.model';
import { AssetFeature, AssetFeatureSchema } from './models/asset_feature.model';
import { AssetLink, AssetLinkSchema } from './models/asset_link.model';
import { AssetLocCap, AssetLocCapSchema } from './models/asset_loc_cap.model';
import { AssetMapMedia, AssetMapMediaSchema } from './models/asset_map_media.model';
import { AssetMapDtl, AssetMapDtlSchema } from './models/asset_mapdtl.model';
import { AssetMapmst, AssetMapmstSchema } from './models/asset_mapmst.model';
import { AssetSlot, AssetSlotSchema } from './models/asset_slot.model';
import { AssetTyp, AssetTypSchema } from './models/asset_typ.model';
import { AssetTypFeature, AssetTypFeatureSchema } from './models/asset_typ_feature.model';
import { AutoAlcRule, AutoAlcRuleSchema } from './models/auto_alc_rule.model';
import { BingCycTyp, BingCycTypSchema } from './models/bing_cyc_typ.model';
import { BingInvc, BingInvcSchema } from './models/bing_invc.model';
import { BingInvcDtl, BingInvcDtlSchema } from './models/bing_invc_dtl.model';
import { BingPrd, BingPrdSchema } from './models/bing_prd.model';
import { BingPrdDtl, BingPrdDtlSchema } from './models/bing_prd_dtl.model';
import { BingServDtl, BingServDtlSchema } from './models/bing_serv_dtl.model';
import { BldgMst, BldgMstSchema } from './models/bldg_mst.model';
import { Bomdtl, BomdtlSchema } from './models/bomdtl.model';
import { BomdtlIns, BomdtlInsSchema } from './models/bomdtl_ins.model';
import { Bomhdr, BomhdrSchema } from './models/bomhdr.model';
import { BomhdrIns, BomhdrInsSchema } from './models/bomhdr_ins.model';
import { DataAccsGrpUsr, DataAccsGrpUsrSchema } from './models/data_accs_grp_usr.model';
import { LesUsrAth, LesUsrAthSchema } from './models/les_usr_ath.model';
import { LesUsrFav, LesUsrFavSchema } from './models/les_usr_fav.model';
import { LesUsrNavBar, LesUsrNavBarSchema } from './models/les_usr_nav_bar.model';
import { LesUsrRole, LesUsrRoleSchema } from './models/les_usr_role.model';
import { PclUsrfld, PclUsrfldSchema } from './models/pcl_usrfld.model';
import { User, UserSchema } from './models/user.model';
import { UsrClientGrp, UsrClientGrpSchema } from './models/usr_client_grp.model';
import { Btoaud, BtoaudSchema } from './models/btoaud.model';
import { BtoaudDtlTbl, BtoaudDtlTblSchema } from './models/btoaud_dtl_tbl.model';
import { BulbServAreLine, BulbServAreLineSchema } from './models/bulb_serv_are_line.model';
import { Canpck, CanpckSchema } from './models/canpck.model';
import { CarMove, CarMoveSchema } from './models/car_move.model';
import { CarmtxDtl, CarmtxDtlSchema } from './models/carmtx_dtl.model';
import { CarmtxHdr, CarmtxHdrSchema } from './models/carmtx_hdr.model';
import { Client, ClientSchema } from './models/client.model';
import { ClientBingServTyp, ClientBingServTypSchema } from './models/client_bing_serv_typ.model';
import { ClientBingUom, ClientBingUomSchema } from './models/client_bing_uom.model';
import { ClientChrgSched, ClientChrgSchedSchema } from './models/client_chrg_sched.model';
import { ClientGrp, ClientGrpSchema } from './models/client_grp.model';
import { CmcyConvRate,CmcyConvRateSchema } from './models/cmcy_conv_rate.model';
import {CmdConfig, CmdConfigSchema} from './models/cmd_config.model';
import {CmdConfigArg, CmdConfigArgSchema} from "./models/cmd_config_arg.model"
import { CmpDetails, CmpDetailsSchema } from './models/cmp_details.model';
import { CmpHdr, CmpHdrSchema } from './models/cmp_hdr.model';
import {  CnfrmBckServ,CnfrmBckServSchema} from "./models/cnfrm_bck_serv.model";
import {CnfrmInsSrv ,CnfrmInsSrvSchema} from './models/cnfrm_ins_srv.model'
import { CnfrmInvServ, CnfrmInvServSchema } from './models/cnfrm_inv_serv.model';
import { CnfrmServVal, CnfrmServValSchema } from './models/cnfrm_serv_val.model';
import { CntTmplDtl, CntTmplDtlSchema } from './models/cnt_tmpl_dtl.model';
import { CntTmplHdr, CntTmplHdrSchema } from './models/cnt_tmpl_hdr.model';
import { Cnthdr, CnthdrSchema } from './models/cnthdr.model';
import { Cnthst, CnthstSchema } from './models/cnthst.model';
import { Cntsch, CntschSchema } from './models/cntsch.model';
import { Cnttyp, CnttypSchema } from './models/cnttyp.model';
import { Cntwrk, CntwrkSchema } from './models/cntwrk.model';
import { Cntzon, CntzonSchema } from './models/cntzon.model';
import { Codmst, CodmstSchema } from './models/codmst.model';
import { CriteriaMst, CriteriaMstSchema } from './models/criteria_mst.model';
import { CrncyMat, CrncyMatSchema } from './models/crncy_mat.model';
import { CstWhDstLoc, CstWhDstLocSchema } from './models/cst_wh_dst_loc.model';
import { CstWhPutToLoc, CstWhPutToLocSchema } from './models/cst_wh_put_to_loc.model';
import { CstWhPutToLocField, CstWhPutToLocFieldSchema } from './models/cst_wh_put_to_loc_field.model';
import { CstWhSchedule, CstWhScheduleSchema } from './models/cst_wh_schedule.model';
import { CstmsCnsgnmnt, CstmsCnsgnmntSchema } from './models/cstms_cnsgnmnt.model';
import { CstmsCnsgnmntDft, CstmsCnsgnmntDftSchema } from './models/cstms_cnsgnmnt_dft.model';
import { Cstmst, CstmstSchema } from './models/cstmst.model';
import { CtnSelectCri, CtnSelectCriSchema } from './models/ctn_select_cri.model';
import { Ctnmst, CtnmstSchema } from './models/ctnmst.model';
import { CtryMst, CtryMstSchema } from './models/ctry_mst.model';
import { CtyPsz, CtyPszSchema } from './models/cty_psz.model';
import { CurTrirAct, CurTrirActSchema } from './models/cur_trir_act.model';
import { DashModDef, DashModDefSchema } from './models/dash_mod_def.model';
import { DashTabModConfig, DashTabModConfigSchema } from './models/dash_tab_mod_config.model';
import { DashTabAssign, DashTabAssignSchema } from './models/dash_tab_assign.model';
import { DashTabs, DashTabsSchema } from './models/dash_tabs.model';
import { DataAccsGrp, DataAccsGrpSchema } from './models/data_accs_grp.model';
import { DataAccsGrpSup, DataAccsGrpSupSchema } from './models/data_accs_grp_sup.model';
import { Dda, DdaSchema } from './models/dda.model';
import { DdaAction, DdaActionSchema } from './models/dda_action.model';
import { DdaChild, DdaChildSchema } from './models/dda_child.model';
import { DdaField, DdaFieldSchema } from './models/dda_field.model';
import { DdaFieldMap, DdaFieldMapSchema } from './models/dda_field_map.model';
import { DdaFitrGrp, DdaFitrGrpSchema } from './models/dda_fitr_grp.model';
import { DdaMst, DdaMstSchema } from './models/dda_mst.model';
import { DefServ, DefServSchema } from './models/def_serv.model';
import { DevWrkare, DevWrkareSchema } from './models/dev_wrkare.model';
import { DevcisFunction, DevcisFunctionSchema } from './models/devcis_function.model';
import { DevcisFunctionDtl, DevcisFunctionDtlSchema } from './models/devcis_function_dtl.model';
import { Devmst, DevmstSchema } from './models/devmst.model';
import { DevmstReader, DevmstReaderSchema } from './models/devmst_reader.model';
import { Distro, DistroSchema } from './models/distro.model';
import { DistroTyp, DistroTypSchema } from './models/distro_typ.model';
import { DocLblfmt, DocLblfmtSchema } from './models/doc_lblfmt.model';
import { DocRptId, DocRptIdSchema } from './models/doc_rpt_id.model';
import { DocRule, DocRuleSchema } from './models/doc_rule.model';
import { DocRuleFld, DocRuleFldSchema } from './models/doc_rule_fld.model';
import { DocRuleLvl, DocRuleLvlSchema } from './models/doc_rule_lvl.model';
import { DocTyp, DocTypSchema } from './models/doc_typ.model';
import { DocTypArg, DocTypArgSchema } from './models/doc_typ_arg.model';
import { DocTypLvl, DocTypLvlSchema } from './models/doc_typ_lvl.model';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/generatedSchema.gql'),
      sortSchema: true,
      playground: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql/graphql.ts'),
        outputAs: 'class',
      }
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    MongooseModule.forFeature([
      { name: AddressClient.name, schema: AddressClientSchema },
      { name: Adrmst.name, schema: AdrmstSchema },
      { name: Agepfi.name, schema: AgepfiSchema },
      { name: Aisle.name, schema: AisleSchema },
      { name: AisleDckloc.name, schema: AisleDcklocSchema },
      { name: AllocSearchDtl.name, schema: AllocSearchDtlSchema },
      { name: AllocSearchGrp.name, schema: AllocSearchGrpSchema },
      { name: AllocSearchHdr.name, schema: AllocSearchHdrSchema },
      { name: AltPrtmst.name, schema: AltPrtmstSchema },
      { name: ArcCmpShipment.name, schema: ArcCmpShipmentSchema },
      { name: ArcCmpDtl.name, schema: ArcCmpDtlSchema },
      { name: ArcCmpHdr.name, schema: ArcCmpHdrSchema },
      { name: ArcCstmsCnsgnmnt.name, schema: ArcCstmsCnsgnmntSchema },
      { name: ArePckFlg.name, schema: ArePckFlgSchema },
      { name: AreaInvsts.name, schema: AreaInvstsSchema },
      { name: AreMst.name, schema: AreMstSchema },
      { name: AssetCarton.name, schema: AssetCartonSchema },
      { name: AssetFeature.name, schema: AssetFeatureSchema },
      { name: AssetLink.name, schema: AssetLinkSchema },
      { name: AssetLocCap.name, schema: AssetLocCapSchema },
      { name: AssetMapMedia.name, schema: AssetMapMediaSchema },
      { name: AssetMapDtl.name, schema: AssetMapDtlSchema },
      { name: AssetMapmst.name, schema: AssetMapmstSchema },
      { name: AssetSlot.name, schema: AssetSlotSchema },
      { name: AssetTyp.name, schema: AssetTypSchema },
      { name: AssetTypFeature.name, schema: AssetTypFeatureSchema },
      { name: AutoAlcRule.name, schema: AutoAlcRuleSchema },
      { name: BingCycTyp.name, schema: BingCycTypSchema },
      { name: BingInvc.name, schema: BingInvcSchema },
      { name: BingInvcDtl.name, schema: BingInvcDtlSchema },
      { name: BingPrd.name, schema: BingPrdSchema },
      { name: BingPrdDtl.name, schema: BingPrdDtlSchema },
      { name: BingServDtl.name, schema: BingServDtlSchema },
      { name: BldgMst.name, schema: BldgMstSchema },
      { name: Bomdtl.name, schema: BomdtlSchema },
      { name: BomdtlIns.name, schema: BomdtlInsSchema },
      { name: Bomhdr.name, schema: BomhdrSchema },
      { name: BomhdrIns.name, schema: BomhdrInsSchema },
      { name: DataAccsGrpUsr.name, schema: DataAccsGrpUsrSchema },
      { name: LesUsrAth.name, schema: LesUsrAthSchema },
      { name: LesUsrFav.name, schema: LesUsrFavSchema },
      { name: LesUsrNavBar.name, schema: LesUsrNavBarSchema },
      { name: LesUsrRole.name, schema: LesUsrRoleSchema },
      { name: PclUsrfld.name, schema: PclUsrfldSchema },
      { name: User.name, schema: UserSchema },
      { name: UsrClientGrp.name, schema: UsrClientGrpSchema },
      { name: Btoaud.name, schema: BtoaudSchema },
      {name: BtoaudDtlTbl.name, schema: BtoaudDtlTblSchema},
      {name: BulbServAreLine.name, schema: BulbServAreLineSchema},
      {name: Canpck.name, schema: CanpckSchema},
      {name: CarMove.name, schema: CarMoveSchema},
      {name: CarmtxDtl.name, schema: CarmtxDtlSchema},
      {name: CarmtxHdr.name, schema: CarmtxHdrSchema},
      {name:Client.name, schema: ClientSchema},
      {name:ClientBingServTyp.name, schema: ClientBingServTypSchema},
      {name:ClientBingUom.name, schema: ClientBingUomSchema},
      {name:ClientChrgSched.name, schema: ClientChrgSchedSchema},
      {name:ClientGrp.name, schema:ClientGrpSchema},
      {name:CmcyConvRate.name, schema:CmcyConvRateSchema},
      {name:CmdConfig.name, schema: CmdConfigSchema},
      {name:CmdConfigArg.name, schema: CmdConfigArgSchema},
      {name:CmpDetails.name, schema: CmpDetailsSchema},
      {name:CmpHdr.name, schema:CmpHdrSchema},
      {name:CnfrmBckServ.name, schema:CnfrmBckServSchema},
      {name:CnfrmInsSrv.name, schema:CnfrmInsSrvSchema},
      {name:CnfrmInvServ.name, schema:CnfrmInvServSchema},
      {name:CnfrmServVal.name, schema: CnfrmServValSchema},
      {name:CntTmplDtl.name, schema: CntTmplDtlSchema},
      {name:CntTmplHdr.name, schema: CntTmplHdrSchema},
      {name:Cnthdr.name, schema:CnthdrSchema},
      {name:Cnthst.name, schema:CnthstSchema},
      {name:Cntsch.name, schema:CntschSchema},
      {name:Cnttyp.name, schema:CnttypSchema},
      {name:Cntwrk.name, schema:CntwrkSchema},
      {name:Cntzon.name, schema:CntzonSchema},
      {name:Codmst.name, schema:CodmstSchema},
      {name:CriteriaMst.name, schema:CriteriaMstSchema},
      {name:CrncyMat.name, schema:CrncyMatSchema},
      {name:CstWhDstLoc.name, schema:CstWhDstLocSchema},
      {name:CstWhPutToLoc.name, schema:CstWhPutToLocSchema},
      {name:CstWhPutToLocField.name, schema:CstWhPutToLocFieldSchema},
      {name:CstWhSchedule.name, schema:CstWhScheduleSchema},
      {name:CstmsCnsgnmnt.name, schema:CstmsCnsgnmntSchema},
      {name:CstmsCnsgnmntDft.name, schema:CstmsCnsgnmntDftSchema},
      {name:Cstmst.name,schema:CstmstSchema},
      {name:CtnSelectCri.name,schema:CtnSelectCriSchema},
      {name:Ctnmst.name, schema: CtnmstSchema},
      {name:CtryMst.name, schema:CtryMstSchema},
      {name:CtyPsz.name, schema:CtyPszSchema},
      {name:CurTrirAct.name, schema:CurTrirActSchema},
      {name:DashModDef.name, schema:DashModDefSchema},
      {name:DashTabModConfig.name, schema:DashTabModConfigSchema},
      {name:DashTabAssign.name, schema:DashTabAssignSchema},
      {name:DashTabs.name, schema: DashTabsSchema},
      {name:DataAccsGrp.name, schema: DataAccsGrpSchema},
      {name: DataAccsGrpSup.name, schema:DataAccsGrpSupSchema},
      {name:Dda.name, schema:DdaSchema},
      {name:DdaAction.name, schema: DdaActionSchema},
      {name: DdaChild.name, schema: DdaChildSchema},
      {name:DdaField.name, schema:DdaFieldSchema},
      {name:DdaFieldMap.name, schema:DdaFieldMapSchema},
      {name:DdaFitrGrp.name, schema:DdaFitrGrpSchema},
      {name:DdaMst.name, schema:DdaMstSchema},
      {name:DefServ.name, schema:DefServSchema},
      {name:DevWrkare.name, schema:DevWrkareSchema},
      {name:DevcisFunction.name, schema:DevcisFunctionSchema},
      {name:DevcisFunctionDtl.name, schema:DevcisFunctionDtlSchema},
      {name:Devmst.name, schema:DevmstSchema},
      {name:DevmstReader.name, schema:DevmstReaderSchema},
      {name:Distro.name, schema: DistroSchema},
      {name:DistroTyp.name, schema: DistroTypSchema},
      {name:DocLblfmt.name, schema:DocLblfmtSchema},
      {name:DocRptId.name, schema:DocRptIdSchema},
      {name:DocRule.name, schema:DocRuleSchema},
      {name:DocRuleFld.name, schema: DocRuleFldSchema},
      {name:DocRuleLvl.name, schema: DocRuleLvlSchema},
      {name:DocTyp.name, schema:DocTypSchema},
      {name:DocTypArg.name, schema:DocTypArgSchema},
      {name:DocTypLvl.name, schema:DocTypLvlSchema}
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
